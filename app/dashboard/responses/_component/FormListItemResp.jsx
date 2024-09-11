import { Button } from "@/components/ui/button";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function FormListItemResp({ jsonForm, formRecord }) {
  const [loading, setLoading] = useState(false);
  const [responseCount, setResponseCount] = useState(0);

  useEffect(() => {
    const fetchResponseCount = async () => {
      const result = await db
        .select()
        .from(userResponses)
        .where(eq(userResponses.formRef, formRecord.id));

      setResponseCount(result.length);
    };

    fetchResponseCount();
  }, [formRecord.id]);

  const ExportData = async () => {
    let jsonData = [];
    setLoading(true);
    const result = await db
      .select()
      .from(userResponses)
      .where(eq(userResponses.formRef, formRecord.id));

    if (result) {
      result.forEach((item) => {
        const jsonItem = JSON.parse(item.jsonResponse);
        jsonData.push(jsonItem);
      });
      setLoading(false);
      exportToExcel(jsonData);
    }
  };

  const exportToExcel = (jsonData) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, jsonForm?.formTitle + ".xlsx");
  };

  return (
    <div className="border border-gray-200 shadow-lg rounded-lg p-6 mb-6 bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">{jsonForm?.formTitle}</h2>
        <div className="text-sm text-gray-500">{jsonForm?.formHeading}</div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm text-gray-700">
          <strong className="text-gray-900">{responseCount}</strong> Responses
        </h3>
        <Button
          size="sm"
          onClick={ExportData}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
        >
          {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Export"}
        </Button>
      </div>
    </div>
  );
}

export default FormListItemResp;
