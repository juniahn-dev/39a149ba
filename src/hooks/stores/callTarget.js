import { atom, useRecoilState } from "recoil";

const callTargetState = atom({
  key: "CallTarget",
  default: "inbox",
});

export const useCallTarget = () => {
  const [callTarget, setCallTarget] = useRecoilState(callTargetState);

  return {
    callTarget,
    setCallTarget,
  };
};
