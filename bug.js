This bug occurs when using the Expo DocumentPicker library on Android.  When selecting a file, the promise returned by useDocumentPickerAsync never resolves, resulting in a stalled UI and a lack of file data.  This is intermittent and doesn't always happen.  The file selection dialog displays correctly, but no response is received after a file is chosen.