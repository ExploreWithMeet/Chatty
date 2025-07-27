import { FormButton } from "@/components/ui/form/FormButtons";
import { FormInput } from "@/components/ui/form/FormInputs";

export default function SignupPage() {
  return (
    <>
      <div className="max-w-xl md:max-w-md sm:max-w-96 w-full p-5 h-fit bg-white">
        <form>
          <FormInput
            inputLabel="Username..."
            inputId="username"
            isInputTypePass={false}
            errorMsg=""
          />
          <FormButton />
        </form>
      </div>
    </>
  );
}
