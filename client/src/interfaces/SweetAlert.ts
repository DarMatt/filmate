export interface ISweetAlertProps {
  title: string;
  text: string;
  onButtonText?: string;
  onOkAction?: (() => void) | undefined;
}
