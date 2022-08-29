import { apis } from "service";

    

    export const postTask =(payload)=> apis.post(`https://cors-anywhere.herokuapp.com/https://app.clickup.com/tasks/v1/subcategory/193419697/task`,
  {...payload,headers:{"User-Agent":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0","Accept":"application/json, text/plain, */*","Accept-Language":"en-US,en;q=0.5","Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json","Referer":"https://app.clickup.com/43221845/v/l/1970un-84?pr=61418014","sessionId":"jcps866xj","build-version":"2.139.1","X-Build-Git-Sha-Short":"7269c16","X-CSRF":"1","X-Workspace-ID":"43221845","Origin":"https://app.clickup.com","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-origin","Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0OTI1Nzc5MCwidmFsaWRhdGVkIjp0cnVlLCJzZXNzaW9uX3Rva2VuIjp0cnVlLCJ3c19rZXkiOjQyMTg0NTIwMTMsImlhdCI6MTY1OTY4NDQwOSwiZXhwIjoxNjU5ODU3MjA5fQ.jX-SrW6oAtAiGJ3QBnpyZIb9TFVP_2sGhcscqp4uq1I","Connection":"keep-alive",...payload?.headers},});
    
export const postList =(payload)=> apis.post(`https://cors-anywhere.herokuapp.com/canny.io/api/v1/posts/list`,
  {...payload,headers:{"Content-type":"application/x-www-form-urlencoded",...payload?.headers},});
    
export const postCreate =(payload)=> apis.post(`https://cors-anywhere.herokuapp.com/canny.io/api/v1/posts/create`,
  {...payload,headers:{"Content-type":"application/json",...payload?.headers},});
    
export const getMessages =(payload)=> apis.get(`https://discord.com/api/v9/channels/898503549825204244/messages`,
  {...payload,params:{"limit":"50",...payload?.params},headers:{"Accept":"*/*","Accept-Language":"en-GB,en;q=0.9","Authorization":"OTY5NjYxNzk2MzM4MjQxNTg2.GEIE9-.pl-n_hDyAAocv8X2lroXYMPDU0tedO6kdodfwU","Connection":"keep-alive","Referer":"https://discord.com/channels/878500942604038215/898503549825204244","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-origin","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","X-Debug-Options":"bugReporterEnabled","X-Discord-Locale":"en-US","X-Super-Properties":"eyJvcyI6IkxpbnV4IiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1HQiIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTAzLjAuMC4wIiwib3NfdmVyc2lvbiI6IiIsInJlZmVycmVyIjoiaHR0cHM6Ly9kaXNjb3JkLmNvbS8iLCJyZWZlcnJpbmdfZG9tYWluIjoiZGlzY29yZC5jb20iLCJyZWZlcnJlcl9jdXJyZW50IjoiaHR0cHM6Ly9kaXNjb3JkLmNvbS8iLCJyZWZlcnJpbmdfZG9tYWluX2N1cnJlbnQiOiJkaXNjb3JkLmNvbSIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjEzOTY3NCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=","sec-ch-ua":'".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Linux"',...payload?.headers},});
    

    