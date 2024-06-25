import { SadFace } from "../icons";

type Props = {
  message: string;
};

export const ErrorComponent = ({ message }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-6 p-2 text-center text-red-500">
      <SadFace />
      <p>
        {message} <br /> Maybe you just need a VPN :/
      </p>
    </div>
  );
};
