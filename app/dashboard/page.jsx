"use client";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import FormListItem from "./_component/FormListItem";
import Spinner from "./_component/Spinner"; // Import the Spinner component
import Link from "next/link"; // Import Link for navigation
import CreateForm from "./_component/CreateForm";

function FormList() {
  const { user } = useUser();
  const [formList, setFormList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      GetFormList();
    }
  }, [user]);

  const GetFormList = async () => {
    try {
      setLoading(true);
      const result = await db
        .select()
        .from(JsonForms)
        .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(JsonForms.id));

      setFormList(result);
    } catch (err) {
      setError("Failed to fetch forms. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-4 sm:p-6 lg:p-8">
      {loading && <Spinner />} {/* Display spinner while loading */}
      {error && <div className="text-center py-8 text-red-500">{error}</div>}
      {!loading && !error && (
        <div>
          {/* Header with Create Form Button */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center space-x-4">
              <span>Dashboard</span>
            </h2>
            <CreateForm className="ml-auto" />{" "}
            {/* Apply ml-auto to push button to the right */}
          </div>

          {/* Forms List */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {formList.length > 0 ? (
              formList.map((form) => (
                <div
                  key={form.id} // Use a unique identifier for keys
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="p-4 flex flex-col justify-between h-full">
                    <FormListItem
                      jsonForm={JSON.parse(form.jsonform)}
                      formRecord={form}
                      refreshData={GetFormList}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 w-full">
                No forms available.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FormList;
