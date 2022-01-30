import "styled-components";

declare module "styled-components" {
  export type ButtonnContainer = {
    margtinTop: string;
  };
  export type Button = {
    background?: string;
    color?: string;
  };
  export type Checked = {
    checked: boolean;
  };
}
