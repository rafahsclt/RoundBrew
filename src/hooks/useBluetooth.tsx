import React, { createContext, useCallback, useContext, useState } from 'react'
import { Device, Service, Characteristic } from 'react-native-ble-plx'

interface IBluetoothContext {
    isEnable: boolean
    setIsEnable(value: boolean): void
    connectToDevice(device: Device): void
    disconnectToDevice(): Promise<void>
    connectedDevice: Device
    serviceID: string
    characteristicID: string
}

const BluetoothContext = createContext<IBluetoothContext>({} as IBluetoothContext)

const BluetoothProvider: React.FC = ({ children }) => {
    const [isEnable, setIsEnable] = useState(false)
    const [connectedDevice, setConnectedDevice] = useState<Device>({} as Device)

    const [serviceID, setServiceID] = useState<string>('')
    const [characteristicID, setCharacteristicID] = useState<string>('')

    const connectToDevice = useCallback(async (device: Device) => {
        try {
            await device.connect()
            setConnectedDevice(device)
    
            await device.discoverAllServicesAndCharacteristics()
            const services: Service[] = await device.services()
    
            services.forEach(async (service) => {
                if(service.uuid.startsWith('c00fa')) {
                    setServiceID(service.uuid)
    
                    const characteristics: Characteristic[] = await device.characteristicsForService(service.uuid)
    
                    characteristics.forEach(characteristic => {
                        if (characteristic.uuid.startsWith('c00fa')) {
                            const customCharacteristic = characteristic.uuid
    
                            setCharacteristicID(customCharacteristic)
                        }
                    })
                }
            })
        } catch(err) {
            console.log(err)
        }
    }, [setConnectedDevice, setServiceID, setCharacteristicID])

    const disconnectToDevice = useCallback(async () => {
        try {
            const device = connectedDevice
            if(Object.keys(connectedDevice).length !== 0 ) {
                await device.cancelConnection()
                setConnectedDevice({} as Device)
            }
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <BluetoothContext.Provider value={{ isEnable, setIsEnable, connectToDevice, disconnectToDevice,connectedDevice, serviceID, characteristicID }}>
            {children}
        </BluetoothContext.Provider>
    )
}

function useBluetooth(): IBluetoothContext {
    const context = useContext(BluetoothContext)

    if(!context) {
        throw new Error('useBluetooth must be used within BluetoothProvider')
    }

    return context
}

export { BluetoothContext, BluetoothProvider, useBluetooth }