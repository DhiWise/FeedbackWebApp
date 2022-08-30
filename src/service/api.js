import { apis } from "service";

    

    export const postTask =(payload)=> apis.post(`https://cors-anywhere.herokuapp.com/https://app.clickup.com/tasks/v1/subcategory/[your subcategory id]/task`,
  {...payload,headers:{"User-Agent":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0","Accept":"application/json, text/plain, */*","Accept-Language":"en-US,en;q=0.5","Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json","Referer":"https://app.clickup.com/43221845/v/l/1970un-84?pr=61418014","sessionId":"jcps866xj","build-version":"2.139.1","X-Build-Git-Sha-Short":"7269c16","X-CSRF":"1","X-Workspace-ID":"43221845","Origin":"https://app.clickup.com","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-origin","Authorization":"[your Clickup Authorization token]","Connection":"keep-alive",...payload?.headers},});
    
export const postList =(payload)=> apis.post(`https://cors-anywhere.herokuapp.com/canny.io/api/v1/posts/list`,
  {...payload,headers:{"Content-type":"application/x-www-form-urlencoded",...payload?.headers},});
    
export const postCreate =(payload)=> apis.post(`https://cors-anywhere.herokuapp.com/canny.io/api/v1/posts/create`,
  {...payload,headers:{"Content-type":"application/json",...payload?.headers},});
    
export const getMessages =(payload)=> apis.get(`https://discord.com/api/v9/channels/[your discord channel id]/messages`,
  {...payload,params:{"limit":"50",...payload?.params},headers:{"Accept":"*/*","Accept-Language":"en-GB,en;q=0.9","Authorization":"[your discord authentication token]","Connection":"keep-alive","Referer":"[your Referer]","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-origin","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","X-Debug-Options":"bugReporterEnabled","X-Discord-Locale":"en-US","X-Super-Properties":"[your X-Super-Properties]","sec-ch-ua":'".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Linux"',...payload?.headers},});
    

    