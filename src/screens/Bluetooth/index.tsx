import React, { useState, useEffect, useCallback } from 'react'
import { PermissionsAndroid } from 'react-native'
import { BleManager, Device } from 'react-native-ble-plx'
import { useNavigation } from '@react-navigation/native'


import Header from '../../components/Header'
import Button from '../../components/Button'
import { Container } from './styles'

const Bluetooth:React.FC = () => {
    const manager = new BleManager()

    const [isEnable, setIsEnable] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [deviceList, setDeviceList] = useState<Device[]>([])
    const [connectedDevice, setConnectedDevice] = useState({})
    const [isConnected, setIsConnected] = useState(false)

    const toogleStatus = useCallback(async () => {
        console.log(isEnable)
        try {
            if(isEnable) {
                setIsEnable(false)
                await manager.disable()
            } else {
                setIsEnable(true)
                await manager.enable()
            }
        } catch(err) {
            console.log(err)
        }
    }, [isEnable, setIsEnable])

    const startScanDevices = useCallback(() => {
        setIsScanning(true)

        let list = deviceList.slice()

        manager.startDeviceScan(null, null, (err, device) => {
            console.log(device)
            if(err) console.log(err)

            if(device) {
                const hasID = list.some(elem => elem.id === device.id)
    
                if(hasID) {
                    list.push(device)
                    setDeviceList(list)
                }
            }
        })
    }, [deviceList, setDeviceList, manager])

    const showDetails = useCallback(() => {
        console.log()
        manager.stopDeviceScan()
    }, [])

    useEffect(() => {
        async function verifyStatus() {
            const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
            
            //if (!result) {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
            //}

            console.log(result)
            
            

            const status = await manager.state()
            if (status === 'PoweredOn') setIsEnable(true)
            if (status === 'PoweredOff') setIsEnable(false)
        }

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
            <Button 
                buttonText="Procurar dispositivos"
                onPress={startScanDevices}
            />
            <Button onPress={showDetails} buttonText="Teste"/>
        </Container>
    )
}

export default Bluetooth