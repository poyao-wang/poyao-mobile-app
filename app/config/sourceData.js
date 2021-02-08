import { Alert } from "react-native";

const dataFromJson = require("../../data.json");

const update = async (
  successAlertShow = false,
  messageSuccess = "Data update success.",
  messageFailed = "Data update failed."
) => {
  try {
    const response = await fetch(
      "https://github.com/poyao-wang/my-profile-data/raw/master/data.json"
    );
    const jsonData = response.json();

    if (successAlertShow) {
      Alert.alert(messageSuccess);
    }
    return jsonData;
  } catch (error) {
    if (successAlertShow) {
      Alert.alert(messageFailed);
    }
  }
};

export default { data: dataFromJson, update };
