import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import FieldEdit from "./FieldEdit";
import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import moment from "moment";
import { toast } from "sonner";

function FormUi({
  jsonForm,
  selectedTheme,
  selectedStyle,
  onFieldUpdate,
  deleteField,
  editable = true,
  formId = 0,
  enabledSignIn = false,
}) {
  const [formData, setFormData] = useState();
  let formRef = useRef();
  const { user, isSignedIn } = useUser();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hadleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const result = await db.insert(userResponses).values({
        jsonResponse: formData,
        createdAt: moment().format("DD/MM/yyyy"),
        formRef: formId,
      });

      if (result) {
        formRef.reset();

        // Success Toast
        toast.success(
          <div className="flex items-center">
            <span className="mr-2 text-3xl">🎉</span>
            <div>
              <strong className="block">Form Submitted!</strong>
              <p>Your form has been successfully submitted.</p>
            </div>
          </div>,
          {
            style: {
              border: "1px solid #4caf50", // Green border for success
              padding: "16px", // Padding for spacing
              color: "#4caf50", // Text color
              backgroundColor: "#f9fff9", // Light green background
              borderRadius: "8px", // Rounded corners
              fontFamily: "'Inter', sans-serif", // Font family
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
              marginBottom: "16px", // Space below the toast box
              marginRight: "16px",
            },
            duration: 3000, // Duration for the toast to be visible
            icon: "✅", // Success icon
            position: "bottom-right", // Position of the toast
          }
        );
      } else {
        throw new Error("Error while saving your form!");
      }
    } catch (error) {
      console.error("Error updating form:", error);

      // Error Toast
      toast.error(
        <div className="flex items-center">
          <span className="mr-2">❌</span>
          <div>
            <strong className="block">Update Failed!</strong>
            <p>There was an error updating your form. Please try again.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #f44336", // Red border for errors
            padding: "16px", // Padding for spacing
            color: "#f44336", // Text color
            backgroundColor: "#fff4f4", // Light red background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "⚠️", // Error icon
          position: "bottom-right", // Position of the toast
        }
      );
    }
  };

  const handleCheckboxChange = (fieldName, itemName, value) => {
    const list = formData?.[fieldName] ? formData?.[fieldName] : [];

    if (value) {
      list.push({
        label: itemName,
        value: value,
      });
      setFormData({
        ...formData,
        [fieldName]: list,
      });
    } else {
      const result = list.filter((item) => item.label == itemName);
      setFormData({
        ...formData,
        [fieldName]: result,
      });
    }
  };

  return (
    <form
      ref={(e) => (formRef = e)}
      onSubmit={onFormSubmit}
      className="border p-5 md:w-[600px] rounded-lg"
      data-theme={selectedTheme}
      style={{
        boxShadow: selectedStyle?.key == "boxshadow" && "5px 5px 0px black",
        border: selectedStyle?.key == "border" && selectedStyle.value,
      }}
    >
      <h2 className="font-bold text-center text-2xl">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">
        {jsonForm?.formHeading}
      </h2>

      {jsonForm?.fields?.map((field, index) => (
        <div key={index} className="flex items-center gap-2">
          {field.fieldType == "select" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.label}</label>

              <Select
                required={field?.required}
                onValueChange={(v) => hadleSelectChange(field.fieldName, v)}
              >
                <SelectTrigger className="w-full bg-transparent">
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.label ? item.label : item}
                    >
                      {item.label ? item.label : item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : field.fieldType == "radio" ? (
            <div className="w-full my-3">
              <label className="text-xs text-gray-500">{field.label}</label>

              <RadioGroup required={field?.required}>
                {field.options.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item.label}
                      id={item.label}
                      onClick={() =>
                        hadleSelectChange(field.fieldName, item.label)
                      }
                    />
                    <Label htmlFor={item.label}>{item.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : field.fieldType == "checkbox" ? (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field?.label}</label>
              {field?.options ? (
                field?.options?.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Checkbox
                      onCheckedChange={(v) =>
                        handleCheckboxChange(
                          field?.label,
                          item.label ? item.label : item,
                          v
                        )
                      }
                    />
                    <h2>{item.label ? item.label : item}</h2>
                  </div>
                ))
              ) : (
                <div className="flex gap-2 items-center">
                  <Checkbox required={field.required} />
                  <h2>{field.label}</h2>
                </div>
              )}
            </div>
          ) : (
            <div className="my-3 w-full">
              <label className="text-xs text-gray-500">{field.label}</label>
              <Input
                type={field?.type}
                placeholder={field.placeholder}
                name={field.fieldName}
                className="bg-transparent"
                required={field?.required}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          )}

          {editable && (
            <div className="mt-6">
              <FieldEdit
                defaultValue={field}
                onUpdate={(value) => onFieldUpdate(value, index)}
                deleteField={() => deleteField(index)}
              />
            </div>
          )}
        </div>
      ))}
      {!enabledSignIn ? (
        <button className="btn btn-primary">Submit</button>
      ) : isSignedIn ? (
        <button className="btn btn-primary">Submit</button>
      ) : (
        <Button>
          <SignInButton mode="modal">Sign In before Submit</SignInButton>
        </Button>
      )}
    </form>
  );
}

export default FormUi;
