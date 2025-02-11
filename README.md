# Expo DocumentPicker Android - Intermittent Promise Hang

This repository demonstrates a bug in Expo's DocumentPicker API on Android where the promise returned by `useDocumentPickerAsync` sometimes fails to resolve after a file is selected. The file picker dialog appears and functions correctly, but the promise remains pending indefinitely.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app on an Android device or emulator.
4. Attempt to select a file using the DocumentPicker.  The issue is intermittent, so multiple attempts may be necessary to reproduce.

## Bug Details

The issue appears to be related to Android's file system interactions. No specific pattern triggering the issue has been identified, suggesting a potential race condition or interaction with underlying Android system services.  The behavior is inconsistent. 

## Solution (if any)

Currently, there's no guaranteed fix. Workarounds may involve trying different permission configurations or retry mechanisms but aren't reliable.  A fix in the Expo library itself would be necessary to resolve the issue completely.