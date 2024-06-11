import { ComponentProps } from "react";
import { Trans } from "react-i18next";

type Props = ComponentProps<typeof Trans>;

const Translate = (props: Props) => {
  return <Trans {...props} />;
};

export default Translate;
