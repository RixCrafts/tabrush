const COMMAND_RELOAD_ALL_TABS = "tabrush-reload-all-tabs";
const RELOAD_DELAY_MS = 50;

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function reloadAllTabs() {
  const tabs = await chrome.tabs.query({});
  let reloadedCount = 0;

  for (const tab of tabs) {
    if (typeof tab.id !== "number") {
      continue;
    }

    try {
      await chrome.tabs.reload(tab.id);
      reloadedCount += 1;
    } catch (error) {
      console.warn(`Could not reload tab ${tab.id}.`, error);
    }

    await sleep(RELOAD_DELAY_MS);
  }

  console.info(`TabRush: reloaded ${reloadedCount} of ${tabs.length} tabs.`);
}

chrome.commands.onCommand.addListener((command) => {
  if (command !== COMMAND_RELOAD_ALL_TABS) {
    return;
  }

  reloadAllTabs().catch((error) => {
    console.error("TabRush failed.", error);
  });
});
