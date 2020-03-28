import axios from 'axios'

const KEY = 'AIzaSyBguL_hKbVNujeQYe84ks-oDSClBdqqBM0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

