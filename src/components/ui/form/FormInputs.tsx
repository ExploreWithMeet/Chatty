"use client";
import { TFormInput } from "@/types/FormTypes";
import { useState } from "react";

export function FormInput({
  inputLabel,
  inputId,
  isInputTypePass,
  errorMsg,
}: TFormInput) {
  const [isPass, setIsPass] = useState<boolean>(isInputTypePass);
  const changeInputType = (): void => setIsPass(() => !isPass);

  return (
    <div>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input type={isPass ? "password" : "text"} id={inputId} />
      {isInputTypePass ? <div onClick={changeInputType}></div> : ""}
      {errorMsg ? <span>{errorMsg}</span> : ""}
    </div>
  );
}
