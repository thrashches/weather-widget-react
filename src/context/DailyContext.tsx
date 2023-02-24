import React, { createContext, FC, useState } from "react";
import { IChildren } from "../api/types";

type DaysType = "today" | "five";

interface IDailyContext {
  days: DaysType;
  setDays: (days: DaysType) => void;
}

const defaultState: IDailyContext = {
  days: "today",
  setDays: (days: DaysType) => {},
};

const DailyContext = createContext<IDailyContext>(defaultState);

const DailyProvider: FC<IChildren> = ({ children }) => {
  const [days, setDays] = useState<DaysType>(defaultState.days);

  return (
    <DailyContext.Provider value={{ days, setDays }}>
      {children}
    </DailyContext.Provider>
  );
};

export { DailyContext, DailyProvider, type DaysType };
