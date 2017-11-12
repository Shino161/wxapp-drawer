module.exports = {
  openIotDrawer() {
    console.log('open-iot-drawer');
    this.setData({
      iotDrawerOpen: true
    });
  },
  closeIotDrawer() {
    console.log('close-iot-drawer');
    this.setData({
      iotDrawerOpen: false
    });
  }
};
