chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
  const url = new URL(tab.url ?? '');
  chrome.storage.local.get(['codes'], (items: { [codes: string]: any[] }) => {
    if (items.codes) {
      const matchedItems = items.codes.filter((item) => item.url === url.origin);
      chrome.browserAction.setBadgeText({ text: matchedItems.length.toString() });
    }
  });
});
