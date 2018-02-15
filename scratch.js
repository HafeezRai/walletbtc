import {
  Loading,
  Permission,
} from '../components'

<Loading required={this.state.cameraPermission}>
  <Loading.Finished>
    <Permission permission={this.state.cameraPermission}>
      <Permissions.Granted>
        <Camera style={styles.preview}
          ref="cameraCapture"
          torchMode={torchMode}
          onBarCodeRead={this.onBarCodeRead} />
      </Permissions.Granted>

      <Permissions.Denied>
        <View style={[styles.preview, { justifyContent: 'center', alignItems: 'center' }, UTILS.border()]}>
          <Text>{DENIED_PERMISSION_TEXT}</Text>
        </View>
      </Permissions.Denied>
    </Permission>
  </Loading.Finished>

  <Loading.Started>
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <ActivityIndicator size="large" style={{ flex: 1, alignSelf: 'center' }} />
    </View>
  </Loading.Started>
</Loading>
