"use client";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import FormListItemResp from "./_component/FormListItemResp";

function Responses() {
  const { user } = useUser();
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    user && getFormList();
  }, [user]);

  const getFormList = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress));

    setFormList(result);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="pt-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex items-center justify-between">
          Responses
          <span className="text-sm text-gray-600">Total Forms: {formList.length}</span>
        </h2>

        {formList.length === 0 ? (
          <div className="flex justify-center items-center h-40 bg-white shadow-md rounded-lg p-4">
            <p className="text-lg text-gray-500">No responses available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formList.map((form, index) => (
              <FormListItemResp
                key={index}
                formRecord={form}
                jsonForm={JSON.parse(form.jsonform)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Responses;
