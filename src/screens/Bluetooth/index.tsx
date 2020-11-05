import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { ActivityIndicator, PermissionsAndroid, Modal, View, Text } from 'react-native'
import { BleManager, Device, Service } from 'react-native-ble-plx'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { useBluetooth } from '../../hooks/useBluetooth'

import Header from '../../components/Header'
import Button from '../../components/Button'
import { Container, ModalView, Title, DeviceButton, DeviceText, ConnectionDetails, StrongDetailText } from './styles'
import { FlatList } from 'react-native-gesture-handler'

const Bluetooth: React.FC = () => {
    const manager = new BleManager()
    const { colors } = useContext(ThemeContext)
    const { connectToDevice, connectedDevice, disconnectToDevice, serviceID, characteristicID, isEnable, setIsEnable } = useBluetooth()
    const { navigate } = useNavigation()

    const [isScanning, setIsScanning] = useState(false)
    const [deviceList, setDeviceList] = useState<Device[]>([])

    const toogleStatus = useCallback(async () => {
        try {
            if (isEnable) {
                setIsEnable(false)
                await disconnectToDevice()
                await manager.disable()
            } else {
                setIsEnable(true)
                await manager.enable()
            }
        } catch (err) {
            console.log(err)
        }
    }, [isEnable, setIsEnable])

    const startScanDevices = useCallback(() => {
        setIsScanning(true)

        let list = deviceList.slice()

        manager.startDeviceScan(null, null, (err, device) => {
            if (err) return

            if (device) {
                const alreadyInList = list.some(elem => elem.id === device.id)

                if (!alreadyInList) {
                    list.push(device)
                    setDeviceList(list)
                }
            }
        })
    }, [setIsScanning, deviceList, setDeviceList, manager])

    const stopScanDevices = useCallback(() => {
        setIsScanning(false)
        manager.stopDeviceScan()
    }, [manager, setIsScanning])


    useEffect(() => {
        async function verifyStatus() {
            const fineLocation = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            const coarseLocation = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)

            !fineLocation && await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            !coarseLocation && await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)


            const status = await manager.state()
            if (status === 'PoweredOn') setIsEnable(true)
            if (status === 'PoweredOff') setIsEnable(false)
        }

        verifyStatus()
    }, [])

    return (
        <Container>
            <Modal
                visible={isScanning}
                transparent={true}
                animationType="fade"
            >
                <ModalView isScanning={isScanning}>
                    <ActivityIndicator
                        size={80}
                        color='#e28282'
                        style={{ marginBottom: 20 }}
                    />
                    <Button onPress={stopScanDevices}>Parar Busca</Button>
                </ModalView>
            </Modal>

            <Header
                title="Bluetooth"
                iconName="arrow-left"
                hasSwitch
                value={isEnable}
                onValueChange={toogleStatus}
            />

            {Object.keys(connectedDevice).length === 0 ? (
                <View>
                    <Button
                        onPress={startScanDevices}
                        disabled={!isEnable}
                        isEnable={isEnable}
                    >Procurar por dispositivos</Button>

                    {isEnable && (
                        <View>
                            <Title>Dispositivos encontrados :</Title>
                            <FlatList
                                data={deviceList}
                                keyExtractor={fDevice => String(fDevice.id)}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item: fDevice }) => (
                                    <DeviceButton onPress={() => fDevice.name && connectToDevice(fDevice)}>
                                        <Icon name="bluetooth" size={22} color={colors.primary} />
                                        <DeviceText>{fDevice.name ? fDevice.name : 'Sem nome'}</DeviceText>
                                        <Icon name="link" size={22} color={colors.primary} />
                                    </DeviceButton>
                                )}
                            />
                        </View>
                    )}
                </View>
            ) : (
                    <View>
                        <Button
                            onPress={() => navigate('Recipe')}
                        >Ir para receitas</Button>
                        <Title>Dispositivo conectado :</Title>
                        <DeviceButton>
                            <Icon name="bluetooth" size={22} color={colors.primary} />
                            <DeviceText>{connectedDevice.name}</DeviceText>
                            <Icon name="x-circle" size={22} color={colors.primary} />
                        </DeviceButton>
                        <ConnectionDetails>
                            <StrongDetailText>Service ID : </StrongDetailText>
                            <Text>{serviceID}</Text>
                            <StrongDetailText>Characteristic ID : </StrongDetailText>
                            <Text>{characteristicID}</Text>
                        </ConnectionDetails>
                    </View>
                )}
        </Container>
    )
}

export default Bluetooth