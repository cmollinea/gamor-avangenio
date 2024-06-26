import { SadFace } from "../icons";

type Props = {
  message: string;
  reset: () => void;
};

export const ErrorComponent = ({ message, reset }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-6 p-2 text-center text-red-500">
      <SadFace />
      <p>
        {message} <br /> Maybe you just need a VPN :/
      </p>
      <button
        onClick={reset}
        className="rounded-xl border border-red-500 text-red-500"
      >
        Try again
      </button>
    </div>
  );
};
