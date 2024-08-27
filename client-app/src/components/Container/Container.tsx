import React from 'react'
import FormContainer from '../Form/FormContainer'
import { UrlData } from '../../interface/UrlData'
import axios from 'axios'
import { serverUrl } from '../../helpers/Constants'
import DataTable from '../DataTable/DataTable'

const Container = () => {
    const [data, setData] = React.useState<UrlData[]>([])
    const [reload, setReload] = React.useState<boolean>(false)

    const updateReload = ():void => {
      setReload(true)
    }
    
    const fetchTabledata = async () => {
        const response = await axios.get(`${serverUrl}/shorturl`)
        setData(response.data)
        setReload(false)
    }

    React.useEffect(() => {
        fetchTabledata()
    }, [reload])

  return (
    <>
        <FormContainer updateReload={updateReload} />
        <DataTable updateReload={updateReload} data={data}/>
    </>
  )
}

export default Container