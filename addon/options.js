 // Restores select box and checkbox state using the preferences
 // stored in chrome.storage.
 const restoreOptions = () => {
   chrome.storage.sync.get({
      colorTheme: 'Light',
      defaultAspect: 'Object tab',
      openInNewTab: 'No',
      showExportBtn: 'true',
      showImportBtn: 'true',
      showLimitsBtn: 'true',
      showMetadataBtn: 'true',
      showApiBtn: 'true',
      showSetupBtn: 'true'
   },
   (options) => {
      document.getElementById('colorTheme').value = options.colorTheme;
      document.getElementById('defaultAspect').value = options.defaultAspect;
      document.getElementById('openInNewTab').value = options.openInNewTab;
      document.getElementById('showExportBtn').checked = options.showExportBtn;
      document.getElementById('showImportBtn').checked = options.showImportBtn;
      document.getElementById('showLimitsBtn').checked = options.showLimitsBtn;
      document.getElementById('showMetadataBtn').checked = options.showMetadataBtn;
      document.getElementById('showApiBtn').checked = options.showApiBtn;
      document.getElementById('showSetupBtn').checked = options.showSetupBtn;
   }
   );
 };

 // Saves options to chrome.storage
const saveOptions = () => {
   const colorTheme = document.getElementById('colorTheme').value;
   const defaultAspect = document.getElementById('defaultAspect').value;
   const openInNewTab = document.getElementById('openInNewTab').value;
   const showExportBtn = document.getElementById('showExportBtn').checked;
   const showImportBtn = document.getElementById('showImportBtn').checked;
   const showLimitsBtn = document.getElementById('showLimitsBtn').checked;
   const showMetadataBtn = document.getElementById('showMetadataBtn').checked;
   const showApiBtn = document.getElementById('showApiBtn').checked;
   const showSetupBtn = document.getElementById('showSetupBtn').checked;

   chrome.storage.sync.set({
      colorTheme: colorTheme,
      defaultAspect: defaultAspect,
      openInNewTab: openInNewTab,
      showExportBtn: showExportBtn,
      showImportBtn: showImportBtn,
      showLimitsBtn: showLimitsBtn,
      showMetadataBtn: showMetadataBtn,
      showApiBtn: showApiBtn,
      showSetupBtn: showSetupBtn
   },
     (options) => {
       // Update status to let user know options were saved.
       const status = document.getElementById('save_status');
       status.textContent = 'Options saved.';
       setTimeout(() => {
         status.textContent = '';
       }, 750);
     }
   );
 };

 document.addEventListener('DOMContentLoaded', restoreOptions);
 document.getElementById('save-btn').addEventListener('click', saveOptions);
