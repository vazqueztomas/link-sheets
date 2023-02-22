import Papa from 'papaparse'
type Link = {
  label: string,
  url: string,
}

type User = {
  slug: string,
  url: string,
}

const api = {
  links: {
    fetch: async (url: string) => {
      const res = await fetch(url)
      const data = await res.text();
    
      const parsed = await new Promise<Link[]>((resolve, reject) => {
        Papa.parse<Link>(data, {header: true, complete: (result) => {resolve(result.data)}, error: reject});
      })
    
      return parsed
    }
  },
  user: {
    list : async () => {
      const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSEPJV5T6bioqoLOpDmMDVSL10HenLMAEYyXqm__QejRF6tpRP5TvMfY58_NFAt_8K4t6E6qaw_UYB0/pub?gid=1111896370&single=true&output=csv")
      const data = await res.text();
    
      const parsed = await new Promise<User[]>((resolve, reject) => {
        Papa.parse<User>(data, {header: true, complete: (result) => {resolve(result.data)}, error: reject});
      })
    
      return parsed
    }
  }
}

export default api