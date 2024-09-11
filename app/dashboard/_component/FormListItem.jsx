import { Button } from "@/components/ui/button";
import { Edit, Share, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs";
import { JsonForms, userResponses } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { toast } from "sonner";
import { RWebShare } from "react-web-share";

function FormListItem({ formRecord, jsonForm, refreshData }) {
  const { user } = useUser();

  const onDeleteForm = async () => {
    try {
      // Attempt to delete the related user responses first
      const deleteUserResponsesResult = await db
        .delete(userResponses)
        .where(eq(userResponses.formRef, formRecord.id));

      if (deleteUserResponsesResult.error) {
        console.error(
          "Error deleting related user responses:",
          deleteUserResponsesResult.error.message
        );
        throw new Error("Failed to delete related user responses.");
      }

      // Attempt to delete the form
      const deleteFormResult = await db
        .delete(JsonForms)
        .where(
          and(
            eq(JsonForms.id, formRecord.id),
            eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );

      if (deleteFormResult.error) {
        console.error("Error deleting form:", deleteFormResult.error.message);
        throw new Error("Failed to delete form.");
      }

      // Notify the user
      toast.success(
        <div className="flex items-center">
          <span className="mr-2 text-3xl">🎉</span>
          <div>
            <strong className="block">Form Deleted!</strong>
            <p>The form has been successfully deleted.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #4caf50",
            padding: "16px",
            color: "#4caf50",
            backgroundColor: "#f9fff9",
            borderRadius: "8px",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
            marginRight: "16px",
          },
          duration: 3000,
          icon: "✅",
          position: "bottom-right",
        }
      );

      // Refresh data to reflect the deletion
      refreshData();
    } catch (error) {
      console.error("Error deleting form:", error.message);

      toast.error(
        <div className="flex items-center">
          <span className="mr-2">❌</span>
          <div>
            <strong className="block">Delete Failed!</strong>
            <p>There was an error deleting your form. Please try again.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #f44336",
            padding: "16px",
            color: "#f44336",
            backgroundColor: "#fff4f4",
            borderRadius: "8px",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
            marginRight: "16px",
          },
          duration: 3000,
          icon: "⚠️",
          position: "bottom-right",
        }
      );
    }
  };

  return (
    <div className="border shadow-sm rounded-lg p-4">
      <div className="flex justify-between">
        <h2></h2>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash
              className="h-5 w-5 text-red-600 
                    cursor-pointer hover:scale-105 transition-all"
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this form? This action cannot be
                undone and will permanently remove the form and its data from
                our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={onDeleteForm}
                className="bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md px-4 py-2"
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h2 className="text-lg text-black">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-500">{jsonForm?.formHeading}</h2>
      <hr className="my-4" />
      <div className="flex justify-between">
        <RWebShare
          data={{
            text:
              jsonForm?.formHeading +
              " , Build your form in seconds with AI form Builder ",
            url: process.env.NEXT_PUBLIC_BASE_URL + "/aiform/" + formRecord?.id,
            title: jsonForm?.formTitle,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button variant="outline" size="sm" className="flex gap-2">
            <Share className="h-5 w-5" /> Share
          </Button>
        </RWebShare>
        <Link href={"/edit-form/" + formRecord?.id}>
          <Button className="flex gap-2" size="sm">
            <Edit className="h-5 w-5" /> Edit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FormListItem;
