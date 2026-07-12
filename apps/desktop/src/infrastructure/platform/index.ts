import { appDb } from '../tauri/db';
import { isTauri } from '../tauri/runtime';
import { getSetting, setSetting } from '../tauri/store';
import {
  requestNotifyPermission,
  sendTimerDoneNotification,
  type NotifyPermission,
} from '../notification';

function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.stack || error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown platform error';
  }
}

export const platformRuntime = {
  isNativeDesktop(): boolean {
    return isTauri();
  },
};

export const platformSettings = {
  get: getSetting,
  set: setSetting,
};

export const platformNotifications = {
  requestPermission: requestNotifyPermission,
  sendTimerDone: sendTimerDoneNotification,
};

export async function initializePlatform(): Promise<string | null> {
  if (!platformRuntime.isNativeDesktop()) {
    return null;
  }

  try {
    await appDb.init();
    return null;
  } catch (error) {
    console.error('App DB initialization failed', error);
    return `DB initialization failed. ${formatError(error)}`;
  }
}

export type { NotifyPermission };
