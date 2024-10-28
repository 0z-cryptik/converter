import { useList } from "../globalState/stateProvider";

export const Answer = () => {
  const { finalResult } = useList();

  return (
    <p className="text-2xl mt-5">
      Answer = <span className="font-semibold">{finalResult}</span>
    </p>
  );
};
