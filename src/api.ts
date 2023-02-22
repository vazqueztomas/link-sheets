import Papa from 'papaparse'
type Link = {
  label: string,
  url: string,
}

const api = {
  links: {
    fetch: async () => {
      const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSEPJV5T6bioqoLOpDmMDVSL10HenLMAEYyXqm__QejRF6tpRP5TvMfY58_NFAt_8K4t6E6qaw_UYB0/pub?gid=0&output=csv")
      const data = await res.text();
    
      const parsed = await new Promise<Link[]>((resolve, reject) => {
        Papa.parse<Link>(data, {header: true, complete: (result) => {resolve(result.data)}, error: reject});
      })
    
      return parsed
    } 
  }
}

export default api