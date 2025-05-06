import { toast } from "sonner";

interface ErrorProps extends Error {
  response?: {
    data: {
      message: string;
    };
  };
}

export const onError = (error: ErrorProps) => {
  // toast.error(
  //   error.response?.data.message ||
  //     "Ocorreu um erro ao processar a requisição, tente novamente mais tarde"
  // );
};
