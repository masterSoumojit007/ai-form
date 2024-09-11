"use client";
import FormUi from "@/app/edit-form/_component/FormUi";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { SignIn, SignInButton } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LiveAiForm({ params }) {
  const [record, setRecord] = useState();
  const [jsonForm, setJsonForm] = useState([]);

  useEffect(() => {
    params && GetFormData();
  }, [params]);

  const GetFormData = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.id, Number(params?.formid)));

    setRecord(result[0]);
    setJsonForm(JSON.parse(result[0].jsonform));
    console.log(result);
  };

  return (
    <div
      className="p-6 sm:p-10 flex flex-col justify-center items-center min-h-screen"
      style={{
        backgroundImage: record?.background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        {record && (
          <FormUi
            jsonForm={jsonForm}
            onFieldUpdate={() => console.log}
            deleteField={() => console.log}
            selectedStyle={JSON.parse(record?.style)}
            selectedTheme={record?.theme}
            editable={false}
            formId={record.id}
            enabledSignIn={record?.enabledSignIn}
          />
        )}
      </div>
      <Link
        className="flex gap-1 items-center bg-black text-white px-2 py-1 rounded-full fixed bottom-5 right-5 cursor-pointer z-50 text-sm"
        href={"/"}
      >
        <Image src={"/assets/favicon.png"} width={16} height={16} alt="Logo" />
        Build your Own AI form
      </Link>
    </div>
  );
}

export default LiveAiForm;
