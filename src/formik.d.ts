// temporary solution for https://github.com/jaredpalmer/formik/issues/1631

import { FormikFormProps } from "formik";

declare module "formik" {
  export function Form(props: FormikFormProps): JSX.Element;
}
