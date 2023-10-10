export type CoreService =
  | DataService
  | ModelService
  | InferenceService
  | ModelManagementService
  | SystemMonitoringService
  | PreferenceService;

export enum DataService {
  GET_CONVERSATIONS = "getConversations",
  CREATE_CONVERSATION = "createConversation",
  DELETE_CONVERSATION = "deleteConversation",
  CREATE_MESSAGE = "createMessage",
  UPDATE_MESSAGE = "updateMessage",
  GET_CONVERSATION_MESSAGES = "getConversationMessages",

  STORE_MODEL = "storeModel",
  UPDATE_FINISHED_DOWNLOAD = "updateFinishedDownloadAt",
  GET_UNFINISHED_DOWNLOAD_MODELS = "getUnfinishedDownloadModels",
  GET_FINISHED_DOWNLOAD_MODELS = "getFinishedDownloadModels",
  DELETE_DOWNLOAD_MODEL = "deleteDownloadModel",

  GET_MODEL_BY_ID = "getModelById",
}

export enum ModelService {
  GET_MODELS = "getModels",
}

export enum InferenceService {
  INFERENCE_URL = "inferenceUrl",
  INIT_MODEL = "initModel",
  STOP_MODEL = "stopModel",
}

export enum ModelManagementService {
  DELETE_MODEL = "deleteModel",
  DOWNLOAD_MODEL = "downloadModel",
  SEARCH_MODELS = "searchModels",
  GET_CONFIGURED_MODELS = "getConfiguredModels",
}

export enum PreferenceService {
  GET_EXPERIMENT_COMPONENT = "experimentComponent",
}

export enum SystemMonitoringService {
  GET_RESOURCES_INFORMATION = "getResourcesInfo",
  GET_CURRENT_LOAD_INFORMATION = "getCurrentLoad",
}
