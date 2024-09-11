"use client";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { ArrowLeft, Share2, SquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RWebShare } from "react-web-share";
import FormUi from "../_component/FormUi";
import Controller from "../_component/Controller";

function EditForm({ params }) {
  const { user } = useUser();
  const [jsonForm, setJsonForm] = useState([]);
  const router = useRouter();
  const [updateTrigger, setUpdateTrigger] = useState();
  const [record, setRecord] = useState([]);

  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedBackground, setSelectedBackground] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    user && GetFormData();
  }, [user]);

  const GetFormData = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(
        and(
          eq(JsonForms.id, params?.formId),
          eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    setRecord(result[0]);
    setJsonForm(JSON.parse(result[0].jsonform));
    setSelectedBackground(result[0].background);
    setSelectedTheme(result[0].theme);
    setSelectedStyle(JSON.parse(result[0].style));
  };

  useEffect(() => {
    if (updateTrigger) {
      setJsonForm(jsonForm);
      updateJsonFormInDb();
    }
  }, [updateTrigger]);

  const onFieldUpdate = (value, index) => {
    jsonForm.fields[index].label = value.label;
    jsonForm.fields[index].placeholder = value.placeholder;
    setUpdateTrigger(Date.now());
  };

  const updateJsonFormInDb = async () => {
    try {
      const result = await db
        .update(JsonForms)
        .set({
          jsonform: jsonForm,
        })
        .where(
          and(
            eq(JsonForms.id, record.id),
            eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        )
        .returning({ id: JsonForms.id });

      toast.success(
        <div className="flex items-center">
          <span className="mr-2 text-3xl">🎉</span>

          <div>
            <strong className="block">Form Updated!</strong>
            <p>Your form has been successfully updated.</p>
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
            marginBottom: '16px', // Space below the toast box
            marginRight:'16px',
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "✅", // Success icon
          position: "bottom-right", // Position of the toast
        }
      );

      console.log(result);
    } catch (error) {
      console.error("Error updating form:", error);

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
            marginBottom: '16px', // Space below the toast box
            marginRight:'16px',
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "⚠️", // Error icon
          position: "bottom-right", // Position of the toast
        }
      );
    }
  };

  const deleteField = (indexToRemove) => {
    const result = jsonForm.fields.filter(
      (item, index) => index !== indexToRemove
    );
    jsonForm.fields = result;
    setUpdateTrigger(Date.now());
  };

  const updateControllerFields = async (value, columnName) => {
    const result = await db
      .update(JsonForms)
      .set({
        [columnName]: value,
      })
      .where(
        and(
          eq(JsonForms.id, record.id),
          eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      )
      .returning({ id: JsonForms.id });

    // toast("Updated!!!");
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-5">
        <h2
          className="flex gap-2 items-center cursor-pointer hover:font-bold text-lg"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" /> Back
        </h2>
        <div className="flex gap-2">
          <Link href={"/aiform/" + record?.id} target="_blank">
            <Button className="flex gap-2 text-white bg-purple-700 hover:bg-purple-600">
              <SquareArrowOutUpRight className="h-5 w-5" /> Live Preview
            </Button>
          </Link>
          <RWebShare
            data={{
              text: `${jsonForm?.formHeading} - Build your form in seconds with AI form Builder`,
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/aiform/${record?.id}`,
              title: jsonForm?.formTitle,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button className="flex gap-2 text-white bg-green-600 hover:bg-green-700">
              <Share2 className="h-5 w-5" /> Share
            </Button>
          </RWebShare>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow-md bg-white">
          <Controller
            selectedTheme={(value) => {
              updateControllerFields(value, "theme");
              setSelectedTheme(value);
            }}
            selectedBackground={(value) => {
              updateControllerFields(value, "background");
              setSelectedBackground(value);
            }}
            selectedStyle={(value) => {
              setSelectedStyle(value);
              updateControllerFields(value, "style");
            }}
            setSignInEnable={(value) => {
              updateControllerFields(value, "enabledSignIn");
            }}
          />
        </div>
        <div
          className="md:col-span-2 border rounded-lg p-5 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: selectedBackground
          }}
        >
          <FormUi
            jsonForm={jsonForm}
            selectedTheme={selectedTheme}
            selectedStyle={selectedStyle}
            onFieldUpdate={onFieldUpdate}
            deleteField={(index) => deleteField(index)}
          />
        </div>
      </div>
    </div>
  );
}

export default EditForm;
