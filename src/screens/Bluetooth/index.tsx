import React, { useState, useEffect, useCallback } from 'react'
import { PermissionsAndroid } from 'react-native'
import { BleManager } from 'react-native-ble-plx'
import { useNavigation } from '@react-navigation/native'


import Header from '../../components/Header'
import { Container } from './styles'

const Bluetooth:React.FC = () => {
    const manager = new BleManager()

    const [isEnable, setIsEnable] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [deviceList, setDeviceList] = useState([])
    const [connectedDevice, setConnectedDevice] = useState({})
    const [isConnected, setIsConnected] = useState(false)

    const verifyStatus = useCallback(async () =>  {
        const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
        if (!result) {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
        }

        const status = await manager.state()
        if (status === 'PoweredOn') setIsEnable(true)
        if (status === 'PoweredOff') setIsEnable(false)
    }, [])

    const toogleStatus = useCallback(async () => {
        try {
            if(isEnable) {
                await manager.disable()
                setIsEnable(false)
            } else {
                await manager.enable()
                setIsEnable(false)
            }
        } catch(err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        verifyStatus()
    }, [])

    return (
        <Container>
            <Header 
                title="Bluetooth" 
                iconName="log-in" 
                hasSwitch 
                value={isEnable} 
                onValueChange={toogleStatus}
            />
        </Container>
    )
}

export default Bluetooth