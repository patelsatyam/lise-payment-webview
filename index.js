import React, { Component } from 'react';
import { ActivityIndicator, Text, View, TouchableHighlight, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class LisePaymentWebview extends Component {
    constructor(props) {
        super(props)

        var uri = this.props.uri
        this.state = {
            uri,
            visible: true,
        }
    }

    hideSpinner = () => {
        this.setState({ visible: false });
    }
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    transform: [{ 'translate': [0, 0, 1] }], /* bring view to front */
                    shadowColor: "#333",
                    shadowOpacity: 0.4,
                    shadowRadius: 1,
                    shadowOffset: { height: 1, width: 0 },
                }}>
                    <TouchableHighlight onPress={this.props.onBackPress} style={{
                        width: 40,
                        height: 25,
                        opacity: 0.9,
                        marginTop: 8 / 2 + 2,
                        marginLeft: 8 + 7,
                        borderColor: 'transparent',
                        borderRadius: 3,
                        borderWidth: 1
                    }} underlayColor='#000000'>
                        <Text style={{ color: '#000' }}>
                            Done
                        </Text>

                    </TouchableHighlight>
                </View>
                <WebView
                    onLoad={() => this.hideSpinner()}
                    style={{ flex: 1 }}
                    source={{ uri: this.state.uri }} />
                {this.state.visible && (
                    <ActivityIndicator
                        style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0, }}
                        size="large"
                    />
                )}
            </SafeAreaView>
        )
    }
}