const pageConfig = {
  // Title for your status page
  title: "YGS Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/yuanguangshan', label: 'GitHub' },
    { link: 'https://wiki.yuangs.cc', label: 'wiki' },
    { link: 'https://www.want.biz', label: 'Nas', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
{
      id: 'blog_monitor',
      name: 'My blog @yuangs',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://blog.want.biz',
      tooltip: 'yuangs blog!',
      statusPageLink: 'https://blog.want.biz',
      timeout: 5000,
    },
    {
      id: 'Wiki_monitor',
      name: 'YGS Wiki',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://wiki.yuangs.cc/index.php?title=%E9%A6%96%E9%A1%B5',
      tooltip: 'YGS Wiki!',
      statusPageLink: 'https://wiki.yuangs.cc/index.php?title=%E9%A6%96%E9%A1%B5',
      timeout: 5000,
    },
    // Example TCP Monitor
    {
      id: 'NAS_monitor',
      name: 'Synology NAS',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://www.want.biz',
      tooltip: 'YGS Synology!',
      statusPageLink: 'https://www.want.biz',
      timeout: 5000,
    },
        // Example TCP Monitor
    {
      id: 'Pushdeer_monitor',
      name: 'Pushdeer Service',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://push.want.biz/',
      tooltip: 'YGS Pushdeer!',
      statusPageLink: 'https://push.want.biz/',
      timeout: 5000,
    },    // Example TCP Monitor
    {
      id: 'Jupyter_Notebook_monitor',
      name: 'JupyterLab service',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://notebook.want.biz/lab?',
      tooltip: 'YGS Jupyter Notebook!',
      statusPageLink: 'https://notebook.want.biz/lab?',
      timeout: 5000,
    },

  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "pushdeer://95.169.30.85:8800/PDU1TNH7QrnWGOb4dXnR74nL24RWwkWMT4qkC",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 1,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
