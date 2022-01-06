import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

export type IPromise = Promise<
  | PayloadAction<any, string, { arg: any; requestId: string; requestStatus: 'fulfilled' }, never>
  | PayloadAction<
      unknown,
      string,
      {
        arg: any;
        requestId: string;
        requestStatus: 'rejected';
        aborted: boolean;
        condition: boolean;
      } & ({ rejectedWithValue: true } | ({ rejectedWithValue: false } & {})),
      SerializedError
    >
> & {
  abort: (reason?: string | undefined) => void;
  requestId: string;
  arg: any;
  unwrap: () => Promise<any>;
};
