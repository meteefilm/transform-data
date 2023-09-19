export const data = {
    "openapi": "3.0.1",
    "info": {
      "title": "GSB App API",
      "contact": {
        "name": "Sense Info Tech Software",
        "url": "http://www.sense-infotech.com/",
        "email": "sense@sense-infotech.com"
      },
      "version": "1.0"
    },
    "servers": [
      {
        "url": "http://sitdev.dyndns.org:9148/GSBLegalService",
        "description": "Generated server url"
      }
    ],
    "paths": {
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_plaintiff_update": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_PLAINTIFF_UPDATE",
          "operationId": "legalCasePlaintiffUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCasePlaintiffUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCasePlaintiffUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_plaintiff_list_to": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_PLAINTIFF_LIST_TO",
          "operationId": "legalCasePlaintiffListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCasePlaintiffListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCasePlaintiffListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_plaintiff_find": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_PLAINTIFF_FIND",
          "operationId": "legalCasePlaintiffFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCasePlaintiffFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCasePlaintiffFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_plaintiff_address_update": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_PLAINTIFF_ADDRESS_UPDATE",
          "operationId": "legalCasePlaintiffAddressUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCasePlaintiffAddressUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCasePlaintiffAddressUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_plaintiff_address_list_to": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_PLAINTIFF_ADDRESS_LIST_TO",
          "operationId": "legalCasePlaintiffListTO_1",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCasePlaintiffAddressListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCasePlaintiffAddressListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_plaintiff_address_find": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_PLAINTIFF_ADDRESS_FIND",
          "operationId": "legalCasePlaintiffAddressFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCasePlaintiffAddressFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCasePlaintiffAddressFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_defendant_update": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_DEFENDANT_UPDATE",
          "operationId": "legalCaseDefendantUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDefendantUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDefendantUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_defendant_list_to": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_DEFENDANT_LIST_TO",
          "operationId": "legalCaseDefendantListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDefendantListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDefendantListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_defendant_find": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_DEFENDANT_FIND",
          "operationId": "legalCaseDefendantFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDefendantFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDefendantFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_defendant_address_update": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_DEFENDANT_ADDRESS_UPDATE",
          "operationId": "legalCaseDefendantAddressUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDefendantAddressUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDefendantAddressUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_defendant_address_list_to": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_DEFENDANT_ADDRESS_LIST_TO",
          "operationId": "legalCaseDefendantListTO_1",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDefendantAddressListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDefendantAddressListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal_case_plaintiff_defendant/legal_case_defendant_address_find": {
        "post": {
          "tags": [
            "App Legal Case Plaintiff/defendant Service"
          ],
          "summary": "LEGAL_CASE_DEFENDANT_ADDRESS_FIND",
          "operationId": "legalCaseDefendantAddressFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDefendantAddressFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDefendantAddressFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_request_attach_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_REQUEST_ATTACH_UPDATE",
          "operationId": "ReqRequestAttachUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqRequestAttachUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqRequestAttachUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_request_attach_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_REQUEST_ATTACH_LIST_TO",
          "operationId": "ReqRequestAttachListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqRequestAttachListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqRequestAttachListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_request_attach_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_REQUEST_ATTACH_FIND",
          "operationId": "ReqRequestAttachFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqRequestAttachFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqRequestAttachFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_UPDATE",
          "operationId": "ReqCaseRequestUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_request_no": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_REQUEST_NO",
          "operationId": "ReqCaseRequestRequestNo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestRequestNoRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_minutes_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_MINUTES_UPDATE",
          "operationId": "ReqCaseRequestMinutesUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestMinutesUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestMinutesUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_minutes_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_MINUTES_LIST_TO",
          "operationId": "ReqCaseRequestMinutesListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestMinutesListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestMinutesListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_minutes_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_MINUTES_FIND",
          "operationId": "ReqCaseRequestMinutesFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestMinutesFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestMinutesFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_LIST_TO",
          "operationId": "ReqCaseRequestListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_FIND",
          "operationId": "ReqCaseRequestFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_detail_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_DETAIL_UPDATE",
          "operationId": "ReqCaseRequestDetailUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestDetailUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestDetailUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_detail_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_DETAIL_FIND",
          "operationId": "ReqCaseRequestDetailFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestDetailFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestDetailFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_contract_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_CONTRACT_UPDATE",
          "operationId": "ReqCaseRequestContractUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestContractUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestContractUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_contract_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_CONTRACT_LIST_TO",
          "operationId": "ReqCaseRequestContractListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestContractListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestContractListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_contract_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_CONTRACT_FIND",
          "operationId": "ReqCaseRequestContractFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestContractFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestContractFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_contract_and_collateral_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_CONTRACT_AND_COLLATERAL_LIST_TO",
          "operationId": "ReqCaseRequestContractAndCollateralListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestAndCollateralDataListReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestAndCollateralDataListRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_collateral_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_COLLATERAL_UPDATE",
          "operationId": "ReqCaseRequestCollateralUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestCollateralUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestCollateralUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_collateral_number": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_COLLATERAL_NUMBER",
          "operationId": "ReqCaseRequestCollateralNumber",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestCollateralNumberReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestCollateralNumberRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_collateral_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_COLLATERAL_LIST_TO",
          "operationId": "ReqCaseRequestCollateralListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestCollateralListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestCollateralListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_case_request_collateral_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_CASE_REQUEST_COLLATERAL_FIND",
          "operationId": "ReqCaseRequestContractFind_1",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqCaseRequestCollateralFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqCaseRequestCollateralFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_auction_info_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_AUCTION_INFO_UPDATE",
          "operationId": "reqAuctionInfoUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqAuctionInfoUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqAuctionInfoUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_auction_info_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_AUCTION_INFO_FIND",
          "operationId": "reqAuctionInfoFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqAuctionInfoFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqAuctionInfoFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_auction_appointment_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_AUCTION_APPOINTMENT_UPDATE",
          "operationId": "ReqAuctionAppointmentUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqAuctionAppointmentUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqAuctionAppointmentUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_auction_appointment_list": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_AUCTION_APPOINTMENT_LIST",
          "operationId": "ReqAuctionAppointmentList",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqAuctionAppointmentListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqAuctionAppointmentFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/req_auction_appointment_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "REQ_AUCTION_APPOINTMENT_FIND",
          "operationId": "ReqAuctionAppointmentFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReqAuctionAppointmentFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ReqAuctionAppointmentFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/p_create_legal_code": {
        "post": {
          "tags": [
            "App Legal Store Service"
          ],
          "summary": "Store Procedure : P_CREATE_LEGAL_CODE",
          "operationId": "pCreateLegalCode",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PCreateLegalCodeParam"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/PCreateLegalCodeRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_type_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_TYPE_UPDATE",
          "operationId": "LegalTypeUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalTypeUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalTypeUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_type_list": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_TYPE_LIST",
          "operationId": "legalTypeList",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalTypeFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalTypeFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_type_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_TYPE_FIND",
          "operationId": "legalTypeFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalTypeFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalTypeFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_status_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_STATUS_UPDATE",
          "operationId": "LegalStatusUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalStatusUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalStatusUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_status_list": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_STATUS_LIST",
          "operationId": "legalStatusList",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalStatusFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalStatusFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_status_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_STATUS_FIND",
          "operationId": "legalStatusFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalStatusFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalStatusFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_name_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_NAME_LIST_TO",
          "operationId": "legalNameListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalNameListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalNameListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_name_find_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_NAME_FIND_TO",
          "operationId": "legalNameFindTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalNameListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalNameListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_UPDATE",
          "operationId": "LegalCaseUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_LIST_TO",
          "operationId": "legalCaseListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_UPDATE",
          "operationId": "LegalCaseLiabilityUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_panel_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_PANEL_UPDATE",
          "operationId": "LegalCaseLiabilityPanelUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityPanelUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityPanelUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_panel_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_PANEL_LIST_TO",
          "operationId": "LegalCaseLiabilityPanelListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityPanelListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_panel_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_PANEL_FIND",
          "operationId": "LegalCaseLiabilityPanelFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityPanelFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityPanelFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_officer_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_OFFICER_UPDATE",
          "operationId": "LegalCaseLiabilityOfficerUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityOfficerUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityOfficerUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_officer_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_OFFICER_LIST_TO",
          "operationId": "LegalCaseLiabilityOfficerListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityOfficerListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_officer_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_OFFICER_FIND",
          "operationId": "LegalCaseLiabilityOfficerFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityOfficerFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityOfficerFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_litigant_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_LITIGANT_UPDATE",
          "operationId": "LegalCaseLiabilityLitigantUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLitigantUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityLitigantUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_litigant_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_LITIGANT_LIST_TO",
          "operationId": "LegalCaseLiabilityLitigantListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityLitigantListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_litigant_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_LITIGANT_FIND",
          "operationId": "LegalCaseLiabilityLitigantFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLitigantFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityLitigantFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_LIST_TO",
          "operationId": "LegalCaseLiabilityListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_FIND",
          "operationId": "LegalCaseLiabilityFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_execution_officer_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_EXECUTION_OFFICER_UPDATE",
          "operationId": "LegalCaseLiabilityExecutionOfficerUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_execution_officer_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_EXECUTION_OFFICER_LIST_TO",
          "operationId": "LegalCaseLiabilityExecutionOfficerListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_execution_officer_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_EXECUTION_OFFICER_FIND",
          "operationId": "LegalCaseLiabilityExecutionOfficerFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_embezzler_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_EMBEZZLER_UPDATE",
          "operationId": "LegalCaseLiabilityEmbezzlerUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_embezzler_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_EMBEZZLER_LIST_TO",
          "operationId": "LegalCaseLiabilityEmbezzlerListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_embezzler_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_EMBEZZLER_FIND",
          "operationId": "LegalCaseLiabilityEmbezzlerFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_document_attach_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_DOCUMENT_ATTACH_UPDATE",
          "operationId": "LegalCaseLiabilityDocumentAttachUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_document_attach_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_DOCUMENT_ATTACH_LIST_TO",
          "operationId": "LegalCaseLiabilityDocumentAttachListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_document_attach_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_DOCUMENT_ATTACH_FIND",
          "operationId": "LegalCaseLiabilityDocumentAttachFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_capital_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_CAPITAL_UPDATE",
          "operationId": "LegalCaseLiabilityCapitalUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityCapitalUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityCapitalUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_capital_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_CAPITAL_LIST_TO",
          "operationId": "LegalCaseLiabilityCapitalListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityCapitalListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_capital_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_CAPITAL_FIND",
          "operationId": "LegalCaseLiabilityCapitalFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityCapitalFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityCapitalFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_account_recoupment_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_ACCOUNT_RECOUPMENT_UPDATE",
          "operationId": "LegalCaseLiabilityAccountRecoupmentUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_account_recoupment_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_ACCOUNT_RECOUPMENT_LIST_TO",
          "operationId": "LegalCaseLiabilityAccountRecoupmentListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_account_recoupment_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_ACCOUNT_RECOUPMENT_FIND",
          "operationId": "LegalCaseLiabilityAccountRecoupmentFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_account_inquiry_update": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_ACCOUNT_INQUIRY_UPDATE",
          "operationId": "LegalCaseLiabilityAccountInquiryUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_account_inquiry_list_to": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_ACCOUNT_INQUIRY_LIST_TO",
          "operationId": "LegalCaseLiabilityAccountInquiryListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_liability_account_inquiry_find": {
        "post": {
          "tags": [
            "App Legal Case Liability Service"
          ],
          "summary": "LEGAL_CASE_LIABILITY_ACCOUNT_INQUIRY_FIND",
          "operationId": "LegalCaseLiabilityAccountInquiryFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_high_court_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_HIGH_COURT_UPDATE",
          "operationId": "LegalCaseHighCourtUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseHighCourtUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseHighCourtUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_high_court_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_HIGH_COURT_LIST_TO",
          "operationId": "legalCaseDocumentAttach",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseHighCourtListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseHighCourtListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_high_court_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_HIGH_COURT_FIND",
          "operationId": "LegalCaseHighCourtFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseHighCourtReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseHighCourtRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_FIND",
          "operationId": "legalCaseFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_enforcement_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_ENFORCEMENT_UPDATE",
          "operationId": "LegalCaseEnforcementUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseEnforcementUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseEnforcementUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_enforcement_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_ENFORCEMENT_LIST_TO",
          "operationId": "LegalCaseEnforcementListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseEnforcementListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseEnforcementListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_enforcement_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_ENFORCEMENT_FIND",
          "operationId": "LegalCaseEnforcementFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseEnforcementFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseEnforcementFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_document_attach_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_DOCUMENT_ATTACH_UPDATE",
          "operationId": "legalCaseDocumentAttachUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDocumentAttachUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDocumentAttachUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_document_attach_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_DOCUMENT_ATTACH_LIST_TO",
          "operationId": "legalCaseDocumentAttach_1",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDocumentAttachListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDocumentAttachListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_document_attach_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_DOCUMENT_ATTACH_FIND",
          "operationId": "LegalCaseDocumentAttachFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseDocumentAttachReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseDocumentAttachRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_cost_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_COST_UPDATE",
          "operationId": "LegalCaseCostUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseCostUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseCostUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_cost_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_COST_LIST_TO",
          "operationId": "legalCaseCostListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseCostListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseCostListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_cost_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_COST_FIND",
          "operationId": "legalCaseCostFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseCostFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseCostFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_bank_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_BANK_UPDATE",
          "operationId": "LegalCaseBankUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseBankUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseBankUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_bank_list": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_BANK_LIST",
          "operationId": "LegalCaseBankList",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseBankReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseBankRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_bank_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_BANK_FIND",
          "operationId": "LegalCaseBankFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseBankReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseBankRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_UPDATE",
          "operationId": "LegalCaseAuctionUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_list": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_LIST",
          "operationId": "LegalCaseAuctionList",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionListReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_FIND",
          "operationId": "LegalCaseAuctionFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_appointment_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_APPOINTMENT_UPDATE",
          "operationId": "LegalCaseAuctionAppointmentUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionAppointmentUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionAppointmentUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_appointment_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_APPOINTMENT_LIST_TO",
          "operationId": "LegalCaseAuctionAppointmentListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionAppointmentListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionAppointmentListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_appointment_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_APPOINTMENT_FIND",
          "operationId": "LegalCaseAuctionAppointmentFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionAppointmentFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionAppointmentFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_appointment_collateral_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_APPOINTMENT_COLLATERAL_UPDATE",
          "operationId": "LegalCaseAuctionAppointmentCollateralUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_appointment_collateral_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_APPOINTMENT_COLLATERAL_LIST_TO",
          "operationId": "LegalCaseAuctionAppointmentCollateralListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_auction_appointment_collateral_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_AUCTION_APPOINTMENT_COLLATERAL_FIND",
          "operationId": "LegalCaseAuctionAppointmentCollateralFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_appointment_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_APPOINTMENT_UPDATE",
          "operationId": "LegalCaseAppointmentUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAppointmentUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAppointmentUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_appointment_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_APPOINTMENT_LIST_TO",
          "operationId": "legalCaseAppointmentListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAppointmentListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAppointmentListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/legal_case_appointment_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "LEGAL_CASE_APPOINTMENT_FIND",
          "operationId": "legalCaseAppointmentFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalCaseAppointmentReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/LegalCaseAppointmentRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/cbs_customer_info_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CBS_CUSTOMER_INFO_UPDATE",
          "operationId": "CbsCustomerInfoUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CbsCustomerInfoUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CbsCustomerInfoUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/cbs_customer_info_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CBS_CUSTOMER_INFO_LIST_TO",
          "operationId": "cbsCustomerInfoListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CbsCustomerInfoListTOReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CbsCustomerInfoListTORes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/cbs_customer_info_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CBS_CUSTOMER_INFO_FIND",
          "operationId": "CbsCustomerInfoFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CbsCustomerInfoFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CbsCustomerInfoFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/cbs_cif_contract_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CBS_CIF_CONTRACT_UPDATE",
          "operationId": "CbsCifContractUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CbsCifContractUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CbsCifContractUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/cbs_cif_contract_list": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CBS_CIF_CONTRACT_LIST",
          "operationId": "CbsCifContractList",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CbsCifContractListReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CbsCifContractFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/cbs_cif_contract_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CBS_CIF_CONTRACT_FIND",
          "operationId": "CbsCifContractFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CbsCifContractFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CbsCifContractFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/case_type_update": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CASE_TYPE_UPDATE",
          "operationId": "CaseTypeUpdate",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CaseTypeUpdateReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CaseTypeUpdateRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/case_type_name_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CASE_TYPE_NAME_LIST_TO",
          "operationId": "caseTypeNameListTO",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CaseTypeNameRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/case_type_list_to": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CASE_TYPE_LIST_TO",
          "operationId": "caseTypeListTo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CaseTypeFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CaseTypeFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/legal/case_type_find": {
        "post": {
          "tags": [
            "App Legal Service"
          ],
          "summary": "CASE_TYPE_FIND",
          "operationId": "CaseTypeFind",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CaseTypeFindReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CaseTypeFindRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/common/upload_multipart_file": {
        "post": {
          "tags": [
            "App Common Service"
          ],
          "summary": "Upload Multipart File",
          "operationId": "uploadMultipartFile",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "required": [
                    "file",
                    "uploadFileReq"
                  ],
                  "type": "object",
                  "properties": {
                    "uploadFileReq": {
                      "type": "string"
                    },
                    "file": {
                      "type": "string",
                      "format": "binary"
                    }
                  }
                }
              },
              "application/json": {
                "schema": {
                  "required": [
                    "file",
                    "uploadFileReq"
                  ],
                  "type": "object",
                  "properties": {
                    "uploadFileReq": {
                      "type": "string"
                    },
                    "file": {
                      "type": "string",
                      "format": "binary"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadFileRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/common/upload_file": {
        "post": {
          "tags": [
            "App Common Service"
          ],
          "summary": "Upload File",
          "operationId": "uploadFile",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UploadFileReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadFileRes"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/common/reload_config": {
        "get": {
          "tags": [
            "App Common Service"
          ],
          "summary": "Reload Config",
          "operationId": "reload",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/common/info": {
        "get": {
          "tags": [
            "App Common Service"
          ],
          "summary": "App Common Info",
          "operationId": "info",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AppCommonInfoResp"
                  }
                }
              }
            }
          }
        }
      },
      "/rest/internal/app/common/check_info": {
        "get": {
          "tags": [
            "App Common Service"
          ],
          "summary": "Check Info",
          "operationId": "checkInfo",
          "parameters": [
            {
              "name": "nplToken",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string",
                "default": "dev"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CheckInfoResp"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "LegalCasePlaintiffUpdateData": {
          "type": "object",
          "properties": {
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "plaintiffId": {
              "type": "integer",
              "format": "int32"
            },
            "personType": {
              "type": "string"
            },
            "juristicPersonType": {
              "type": "string"
            },
            "idNo": {
              "type": "string"
            },
            "idCardIssueDate": {
              "type": "string"
            },
            "idCardExpireDate": {
              "type": "string"
            },
            "otherCardType": {
              "type": "string"
            },
            "otherCardNo": {
              "type": "string"
            },
            "plaintiffTitle": {
              "type": "string"
            },
            "plaintiffName": {
              "type": "string"
            },
            "plaintiffSurname": {
              "type": "string"
            },
            "plaintiffEnTitle": {
              "type": "string"
            },
            "plaintiffEnName": {
              "type": "string"
            },
            "plaintiffEnSurname": {
              "type": "string"
            },
            "gender": {
              "type": "string"
            },
            "maritalStatus": {
              "type": "string"
            },
            "race": {
              "type": "string"
            },
            "nationality": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "birthDate": {
              "type": "string"
            },
            "age": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffUpdateRes": {
          "type": "object",
          "properties": {
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffListTO": {
          "type": "object",
          "properties": {
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            },
            "plaintiffId": {
              "type": "integer",
              "format": "int32"
            },
            "plaintiffNameSurname": {
              "type": "string"
            },
            "legalCode": {
              "type": "string"
            },
            "personType": {
              "type": "string"
            },
            "juristicPersonType": {
              "type": "string"
            },
            "idNo": {
              "type": "string"
            },
            "idCardIssueDate": {
              "type": "string",
              "format": "date-time"
            },
            "idCardExpireDate": {
              "type": "string",
              "format": "date-time"
            },
            "otherCardType": {
              "type": "string"
            },
            "otherCardNo": {
              "type": "string"
            },
            "plaintiffTitle": {
              "type": "string"
            },
            "plaintiffName": {
              "type": "string"
            },
            "plaintiffSurname": {
              "type": "string"
            },
            "plaintiffEnTitle": {
              "type": "string"
            },
            "plaintiffEnName": {
              "type": "string"
            },
            "plaintiffEnSurname": {
              "type": "string"
            },
            "gender": {
              "type": "string"
            },
            "maritalStatus": {
              "type": "string"
            },
            "race": {
              "type": "string"
            },
            "nationality": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "birthDate": {
              "type": "string",
              "format": "date-time"
            },
            "age": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCasePlaintiffListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffFindData": {
          "type": "object",
          "properties": {
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiff": {
          "type": "object",
          "properties": {
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "plaintiffId": {
              "type": "integer",
              "format": "int32"
            },
            "personType": {
              "type": "string"
            },
            "juristicPersonType": {
              "type": "string"
            },
            "idNo": {
              "type": "string"
            },
            "idCardIssueDate": {
              "type": "string",
              "format": "date-time"
            },
            "idCardExpireDate": {
              "type": "string",
              "format": "date-time"
            },
            "otherCardType": {
              "type": "string"
            },
            "otherCardNo": {
              "type": "string"
            },
            "plaintiffTitle": {
              "type": "string"
            },
            "plaintiffName": {
              "type": "string"
            },
            "plaintiffSurname": {
              "type": "string"
            },
            "plaintiffEnTitle": {
              "type": "string"
            },
            "plaintiffEnName": {
              "type": "string"
            },
            "plaintiffEnSurname": {
              "type": "string"
            },
            "gender": {
              "type": "string"
            },
            "maritalStatus": {
              "type": "string"
            },
            "race": {
              "type": "string"
            },
            "nationality": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "birthDate": {
              "type": "string",
              "format": "date-time"
            },
            "age": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCasePlaintiffFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCasePlaintiff"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiff"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffAddressUpdateData": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            },
            "addressType": {
              "type": "string"
            },
            "addno": {
              "type": "string"
            },
            "moo": {
              "type": "string"
            },
            "alley": {
              "type": "string"
            },
            "street": {
              "type": "string"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "districtId": {
              "type": "integer",
              "format": "int32"
            },
            "subdistrictId": {
              "type": "integer",
              "format": "int32"
            },
            "postCode": {
              "type": "string"
            },
            "telno1": {
              "type": "string"
            },
            "telno2": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffAddressUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffAddressUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffAddressUpdateRes": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffAddressListTOData": {
          "type": "object",
          "properties": {
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffAddressListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffAddressListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffAddressListTO": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "addressDesc": {
              "type": "string"
            },
            "telno1": {
              "type": "string"
            },
            "telno2": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffAddressListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCasePlaintiffAddressListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffAddressListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffAddressFindData": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCasePlaintiffAddressFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffAddressFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCasePlaintiffAddress": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "plaintiffSeq": {
              "type": "integer",
              "format": "int32"
            },
            "addressType": {
              "type": "string"
            },
            "addno": {
              "type": "string"
            },
            "moo": {
              "type": "string"
            },
            "alley": {
              "type": "string"
            },
            "street": {
              "type": "string"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "districtId": {
              "type": "integer",
              "format": "int32"
            },
            "subdistrictId": {
              "type": "integer",
              "format": "int32"
            },
            "postCode": {
              "type": "string"
            },
            "telno1": {
              "type": "string"
            },
            "telno2": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCasePlaintiffAddressFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCasePlaintiffAddress"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCasePlaintiffAddress"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantUpdateData": {
          "type": "object",
          "properties": {
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "defendantId": {
              "type": "integer",
              "format": "int32"
            },
            "defendantType": {
              "type": "string"
            },
            "personType": {
              "type": "string"
            },
            "juristicPersonType": {
              "type": "string"
            },
            "idNo": {
              "type": "string"
            },
            "idCardIssueDate": {
              "type": "string"
            },
            "idCardExpireDate": {
              "type": "string"
            },
            "otherCardType": {
              "type": "string"
            },
            "otherCardNo": {
              "type": "string"
            },
            "defendantTitle": {
              "type": "string"
            },
            "defendantName": {
              "type": "string"
            },
            "defendantSurname": {
              "type": "string"
            },
            "defendantEnTitle": {
              "type": "string"
            },
            "defendantEnName": {
              "type": "string"
            },
            "defendantEnSurname": {
              "type": "string"
            },
            "gender": {
              "type": "string"
            },
            "maritalStatus": {
              "type": "string"
            },
            "race": {
              "type": "string"
            },
            "nationality": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "birthDate": {
              "type": "string"
            },
            "age": {
              "type": "integer",
              "format": "int32"
            },
            "originalAffiliationCode": {
              "type": "integer",
              "format": "int32"
            },
            "hasAttorney": {
              "type": "string"
            },
            "importantPerson": {
              "type": "string"
            },
            "defendantPosition": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantUpdateRes": {
          "type": "object",
          "properties": {
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantListTO": {
          "type": "object",
          "properties": {
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "defendantId": {
              "type": "integer",
              "format": "int32"
            },
            "defendantNameSurname": {
              "type": "string"
            },
            "defendantType": {
              "type": "string"
            },
            "personType": {
              "type": "string"
            },
            "juristicPersonType": {
              "type": "string"
            },
            "idNo": {
              "type": "string"
            },
            "idCardIssueDate": {
              "type": "string",
              "format": "date-time"
            },
            "idCardExpireDate": {
              "type": "string",
              "format": "date-time"
            },
            "otherCardType": {
              "type": "string"
            },
            "otherCardNo": {
              "type": "string"
            },
            "defendantTitle": {
              "type": "string"
            },
            "defendantName": {
              "type": "string"
            },
            "defendantSurname": {
              "type": "string"
            },
            "defendantEnTitle": {
              "type": "string"
            },
            "defendantEnName": {
              "type": "string"
            },
            "defendantEnSurname": {
              "type": "string"
            },
            "gender": {
              "type": "string"
            },
            "maritalStatus": {
              "type": "string"
            },
            "race": {
              "type": "string"
            },
            "nationality": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "birthDate": {
              "type": "string",
              "format": "date-time"
            },
            "age": {
              "type": "integer",
              "format": "int32"
            },
            "originalAffiliationCode": {
              "type": "integer",
              "format": "int32"
            },
            "hasAttorney": {
              "type": "string"
            },
            "importantPerson": {
              "type": "string"
            },
            "defendantPosition": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseDefendantListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantFindData": {
          "type": "object",
          "properties": {
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendant": {
          "type": "object",
          "properties": {
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "defendantId": {
              "type": "integer",
              "format": "int32"
            },
            "defendantType": {
              "type": "string"
            },
            "personType": {
              "type": "string"
            },
            "juristicPersonType": {
              "type": "string"
            },
            "idNo": {
              "type": "string"
            },
            "idCardIssueDate": {
              "type": "string",
              "format": "date-time"
            },
            "idCardExpireDate": {
              "type": "string",
              "format": "date-time"
            },
            "otherCardType": {
              "type": "string"
            },
            "otherCardNo": {
              "type": "string"
            },
            "defendantTitle": {
              "type": "string"
            },
            "defendantName": {
              "type": "string"
            },
            "defendantSurname": {
              "type": "string"
            },
            "defendantEnTitle": {
              "type": "string"
            },
            "defendantEnName": {
              "type": "string"
            },
            "defendantEnSurname": {
              "type": "string"
            },
            "gender": {
              "type": "string"
            },
            "maritalStatus": {
              "type": "string"
            },
            "race": {
              "type": "string"
            },
            "nationality": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "birthDate": {
              "type": "string",
              "format": "date-time"
            },
            "age": {
              "type": "integer",
              "format": "int32"
            },
            "originalAffiliationCode": {
              "type": "integer",
              "format": "int32"
            },
            "hasAttorney": {
              "type": "string"
            },
            "importantPerson": {
              "type": "string"
            },
            "defendantPosition": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseDefendantFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseDefendant"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendant"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantAddressUpdateData": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "addressType": {
              "type": "string"
            },
            "addno": {
              "type": "string"
            },
            "moo": {
              "type": "string"
            },
            "alley": {
              "type": "string"
            },
            "street": {
              "type": "string"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "districtId": {
              "type": "integer",
              "format": "int32"
            },
            "subdistrictId": {
              "type": "integer",
              "format": "int32"
            },
            "postCode": {
              "type": "string"
            },
            "telno1": {
              "type": "string"
            },
            "telno2": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantAddressUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantAddressUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantAddressUpdateRes": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantAddressListTOData": {
          "type": "object",
          "properties": {
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantAddressListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantAddressListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantAddressListTO": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "addressDesc": {
              "type": "string"
            },
            "telno1": {
              "type": "string"
            },
            "telno2": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantAddressListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseDefendantAddressListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantAddressListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantAddressFindData": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDefendantAddressFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantAddressFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDefendantAddress": {
          "type": "object",
          "properties": {
            "addressSeq": {
              "type": "integer",
              "format": "int32"
            },
            "defendantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "addressType": {
              "type": "string"
            },
            "addno": {
              "type": "string"
            },
            "moo": {
              "type": "string"
            },
            "alley": {
              "type": "string"
            },
            "street": {
              "type": "string"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "districtId": {
              "type": "integer",
              "format": "int32"
            },
            "subdistrictId": {
              "type": "integer",
              "format": "int32"
            },
            "postCode": {
              "type": "string"
            },
            "telno1": {
              "type": "string"
            },
            "telno2": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseDefendantAddressFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseDefendantAddress"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseDefendantAddress"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqRequestAttachUpdateData": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileDetail": {
              "type": "string"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            },
            "attachTypeDocId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqRequestAttachUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqRequestAttachUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqRequestAttachUpdateRes": {
          "type": "object",
          "properties": {
            "attachId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqRequestAttachListTOData": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "seqId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqRequestAttachListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqRequestAttachListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqRequestAttachListTO": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeDesc": {
              "type": "string"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachFileDetail": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "userName": {
              "type": "string"
            },
            "attachTypeDocId": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeDocDesc": {
              "type": "string"
            },
            "urlReqRequestFile": {
              "type": "string"
            },
            "urlReqRequestFileThumbnail": {
              "type": "string"
            }
          }
        },
        "ReqRequestAttachListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqRequestAttachListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqRequestAttachListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqRequestAttachFindData": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqRequestAttachFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqRequestAttachFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqRequestAttach": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileDetail": {
              "type": "string"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "attachTypeDocId": {
              "type": "integer",
              "format": "int32"
            },
            "urlReqRequestFile": {
              "type": "string"
            },
            "urlReqRequestFileThumbnail": {
              "type": "string"
            }
          }
        },
        "ReqRequestAttachFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqRequestAttach"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqRequestAttach"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestUpdateData": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "requestNo": {
              "type": "string"
            },
            "reqDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "requestType": {
              "type": "string"
            },
            "customerId": {
              "type": "integer",
              "format": "int32"
            },
            "requestIdRefer": {
              "type": "integer",
              "format": "int32"
            },
            "requestStatus": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestUpdateRes": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestRequestNo": {
          "type": "object",
          "properties": {
            "requestNo": {
              "type": "string"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestRequestNoRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestRequestNo"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestRequestNo"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestMinutesUpdateData": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "meetingDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "meetingType": {
              "type": "string"
            },
            "meetingDt": {
              "type": "string"
            },
            "meetingSubject": {
              "type": "string"
            },
            "meetingDesc": {
              "type": "string"
            },
            "meetingResult": {
              "type": "string"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachFileDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestMinutesUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestMinutesUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestMinutesUpdateRes": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestMinutesListTOData": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "meetingType": {
              "type": "string"
            },
            "meetingSubject": {
              "type": "string"
            },
            "meetingDesc": {
              "type": "string"
            },
            "createDtFrom": {
              "type": "string"
            },
            "createDtTo": {
              "type": "string"
            },
            "requestNo": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestMinutesListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestMinutesListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestMinutesListTO": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "requestNo": {
              "type": "string"
            },
            "meetingDt": {
              "type": "string"
            },
            "meetingType": {
              "type": "string"
            },
            "meetingSubject": {
              "type": "string"
            },
            "meetingDesc": {
              "type": "string"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachFileDetail": {
              "type": "string"
            },
            "urlReqCaseRequestMinutsFile": {
              "type": "string"
            },
            "urlReqCaseRequestMinutsFileThumbnail": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestMinutesListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestMinutesListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestMinutesListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestMinutesFindData": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestMinutesFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestMinutesFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestMinutes": {
          "type": "object",
          "properties": {
            "seqId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "meetingDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "meetingType": {
              "type": "string"
            },
            "meetingDt": {
              "type": "string",
              "format": "date-time"
            },
            "meetingSubject": {
              "type": "string"
            },
            "meetingDesc": {
              "type": "string"
            },
            "meetingResult": {
              "type": "string"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachFileDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "urlReqCaseRequestMinutsFile": {
              "type": "string"
            },
            "urlReqCaseRequestMinutsFileThumbnail": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestMinutesFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestMinutes"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestMinutes"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestListTOData": {
          "type": "object",
          "properties": {
            "legalType": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "requestNo": {
              "type": "string"
            },
            "requestStatus": {
              "type": "string"
            },
            "createDtFrom": {
              "type": "string"
            },
            "createDtTo": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestListTO": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "requestNo": {
              "type": "string"
            },
            "legalTypeDesc": {
              "type": "string"
            },
            "customerName": {
              "type": "string"
            },
            "branchName": {
              "type": "string"
            },
            "requestDt": {
              "type": "string"
            },
            "requestStatus": {
              "type": "string"
            },
            "requestStatusDesc": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestFindData": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequest": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "requestNo": {
              "type": "string"
            },
            "reqDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "requestType": {
              "type": "string"
            },
            "customerId": {
              "type": "integer",
              "format": "int32"
            },
            "requestIdRefer": {
              "type": "integer",
              "format": "int32"
            },
            "requestStatus": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "ReqCaseRequestFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequest"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequest"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestDetailUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestDetailUpdateRes": {
          "type": "object",
          "properties": {
            "reqDetailId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestDetailFindData": {
          "type": "object",
          "properties": {
            "reqDetailId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestDetailFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestDetailFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestDetail": {
          "type": "object",
          "properties": {
            "reqDetailId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "contractDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "collateralType": {
              "type": "string"
            },
            "collateralId": {
              "type": "integer",
              "format": "int32"
            },
            "collateralOwner": {
              "type": "string"
            },
            "totalAppraisalPrice": {
              "type": "number",
              "format": "double"
            },
            "mortgageAmount": {
              "type": "number",
              "format": "double"
            },
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "ReqCaseRequestDetailFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestDetail"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestDetail"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestContractUpdateData": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestContractUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestContractUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestContractUpdateRes": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestContractListTOData": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestContractListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestContractListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestContractListTO": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractNo": {
              "type": "string"
            },
            "customerName": {
              "type": "string"
            },
            "mainType": {
              "type": "string"
            },
            "subType": {
              "type": "string"
            },
            "consolidateContract": {
              "type": "string"
            },
            "principalAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "openDt": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "customerId": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestContractListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestContractListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestContractListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestContractFindData": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestContractFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestContractFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestContract": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractDeptId": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "ReqCaseRequestContractFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestContract"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestContract"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestAndCollateralDataListData": {
          "type": "object",
          "properties": {
            "requestId": {
              "type": "integer",
              "format": "int32"
            },
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestAndCollateralDataListReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestAndCollateralDataListData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestAndCollateralDataList": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractNo": {
              "type": "string"
            },
            "customerName": {
              "type": "string"
            },
            "mainType": {
              "type": "string"
            },
            "subType": {
              "type": "string"
            },
            "consolidateContract": {
              "type": "string"
            },
            "principalAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "openDt": {
              "type": "string"
            },
            "occupation": {
              "type": "string"
            },
            "customerId": {
              "type": "integer",
              "format": "int32"
            },
            "reqCaseRequestCollateralListTO": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestCollateralListTO"
              }
            }
          }
        },
        "ReqCaseRequestAndCollateralDataListRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestAndCollateralDataList"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestAndCollateralDataList"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralListTO": {
          "type": "object",
          "properties": {
            "reqCollateralId": {
              "type": "integer",
              "format": "int32"
            },
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractNo": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "collateralType": {
              "type": "string"
            },
            "collateralTypeDesc": {
              "type": "string"
            },
            "collateralOwner": {
              "type": "string"
            },
            "mortgageAmount": {
              "type": "number",
              "format": "double"
            },
            "totalAppraisalPrice": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "ReqCaseRequestCollateralUpdateData": {
          "type": "object",
          "properties": {
            "reqCollateralId": {
              "type": "integer",
              "format": "int32"
            },
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "collateralType": {
              "type": "string"
            },
            "collateralId": {
              "type": "integer",
              "format": "int32"
            },
            "collateralOwner": {
              "type": "string"
            },
            "totalAppraisalPrice": {
              "type": "number",
              "format": "double"
            },
            "mortgageAmount": {
              "type": "number",
              "format": "double"
            },
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestCollateralUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestCollateralUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestCollateralUpdateRes": {
          "type": "object",
          "properties": {
            "reqCollateralId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralNumberData": {
          "type": "object",
          "properties": {
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralNumberReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestCollateralNumberData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestCollateralNumber": {
          "type": "object",
          "properties": {
            "collateralNumber": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestCollateralNumberRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestCollateralNumber"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestCollateralNumber"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralListTOData": {
          "type": "object",
          "properties": {
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestCollateralListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestCollateralDataList": {
          "type": "object",
          "properties": {
            "reqCollateralId": {
              "type": "integer",
              "format": "int32"
            },
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractNo": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "collateralType": {
              "type": "string"
            },
            "collateralTypeDesc": {
              "type": "string"
            },
            "collateralOwner": {
              "type": "string"
            },
            "mortgageAmount": {
              "type": "number",
              "format": "double"
            },
            "totalAppraisalPrice": {
              "type": "number",
              "format": "double"
            },
            "reqCaseRequestCollateralNumber": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestCollateralNumber"
              }
            }
          }
        },
        "ReqCaseRequestCollateralListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestCollateralDataList"
              }
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralFindData": {
          "type": "object",
          "properties": {
            "reqCollateralId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqCaseRequestCollateralFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestCollateralFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqCaseRequestCollateral": {
          "type": "object",
          "properties": {
            "reqCollateralId": {
              "type": "integer",
              "format": "int32"
            },
            "reqContractId": {
              "type": "integer",
              "format": "int32"
            },
            "collateralType": {
              "type": "string"
            },
            "collateralId": {
              "type": "integer",
              "format": "int32"
            },
            "collateralOwner": {
              "type": "string"
            },
            "totalAppraisalPrice": {
              "type": "number",
              "format": "double"
            },
            "mortgageAmount": {
              "type": "number",
              "format": "double"
            },
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "ReqCaseRequestCollateralFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqCaseRequestCollateral"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqCaseRequestCollateral"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionInfoUpdateData": {
          "type": "object",
          "properties": {
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "legalExecutionId": {
              "type": "integer",
              "format": "int32"
            },
            "documentNo": {
              "type": "string"
            },
            "documentDt": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "redCasePrefix": {
              "type": "string"
            },
            "redCaseNumber": {
              "type": "string"
            },
            "redCaseYear": {
              "type": "string"
            },
            "plaintiffName": {
              "type": "string"
            },
            "defendantName": {
              "type": "string"
            },
            "mortgageStatus": {
              "type": "string"
            },
            "principalAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "saleAnnounceDt": {
              "type": "string"
            },
            "saleAnnouncePlace": {
              "type": "string"
            },
            "auctionDt": {
              "type": "string"
            },
            "auctionAmt": {
              "type": "number",
              "format": "double"
            },
            "buyer": {
              "type": "string"
            },
            "redeemDt": {
              "type": "string"
            },
            "redeemStatus": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            },
            "clLandId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionInfoUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqAuctionInfoUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqAuctionInfoUpdateRes": {
          "type": "object",
          "properties": {
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionInfoFindData": {
          "type": "object",
          "properties": {
            "auctionId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionInfoFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqAuctionInfoFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqAuctionInfo": {
          "type": "object",
          "properties": {
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "legalExecutionId": {
              "type": "integer",
              "format": "int32"
            },
            "documentNo": {
              "type": "string"
            },
            "documentDt": {
              "type": "string",
              "format": "date-time"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "redCasePrefix": {
              "type": "string"
            },
            "redCaseNumber": {
              "type": "string"
            },
            "redCaseYear": {
              "type": "string"
            },
            "plaintiffName": {
              "type": "string"
            },
            "defendantName": {
              "type": "string"
            },
            "mortgageStatus": {
              "type": "string"
            },
            "principalAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "saleAnnounceDt": {
              "type": "string",
              "format": "date-time"
            },
            "saleAnnouncePlace": {
              "type": "string"
            },
            "auctionDt": {
              "type": "string",
              "format": "date-time"
            },
            "auctionAmt": {
              "type": "number",
              "format": "double"
            },
            "buyer": {
              "type": "string"
            },
            "redeemDt": {
              "type": "string",
              "format": "date-time"
            },
            "redeemStatus": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "clLandId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionInfoFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqAuctionInfo"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqAuctionInfo"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionAppointmentUpdateData": {
          "type": "object",
          "properties": {
            "auctionAptId": {
              "type": "integer",
              "format": "int32"
            },
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "auctionAptDt": {
              "type": "string"
            },
            "auctionStatus": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "ReqAuctionAppointmentUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqAuctionAppointmentUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqAuctionAppointmentUpdateRes": {
          "type": "object",
          "properties": {
            "auctionAptId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionAppointmentListTOData": {
          "type": "object",
          "properties": {
            "auctionAptId": {
              "type": "integer",
              "format": "int32"
            },
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "auctionStatus": {
              "type": "string"
            }
          }
        },
        "ReqAuctionAppointmentListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqAuctionAppointmentListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "ReqAuctionAppointment": {
          "type": "object",
          "properties": {
            "auctionAptId": {
              "type": "integer",
              "format": "int32"
            },
            "auctionId": {
              "type": "integer",
              "format": "int32"
            },
            "auctionAptDt": {
              "type": "string",
              "format": "date-time"
            },
            "auctionStatus": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "ReqAuctionAppointmentFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReqAuctionAppointment"
              }
            },
            "data": {
              "$ref": "#/components/schemas/ReqAuctionAppointment"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionAppointmentFindData": {
          "type": "object",
          "properties": {
            "auctionAptId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ReqAuctionAppointmentFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ReqAuctionAppointmentFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "PCreateLegalCodeData": {
          "type": "object",
          "properties": {
            "pdockey": {
              "type": "string"
            }
          }
        },
        "PCreateLegalCodeParam": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PCreateLegalCodeData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "PCreateLegalCodeRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PCreateLegalCodeSP"
              }
            },
            "data": {
              "$ref": "#/components/schemas/PCreateLegalCodeSP"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "PCreateLegalCodeSP": {
          "type": "object",
          "properties": {
            "vlastNumber": {
              "type": "string"
            }
          }
        },
        "LegalTypeUpdateData": {
          "type": "object",
          "properties": {
            "legalType": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            },
            "displaySeq": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalTypeUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalTypeUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalTypeUpdateRes": {
          "type": "object",
          "properties": {
            "legalType": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalTypeFindData": {
          "type": "object",
          "properties": {
            "legalType": {
              "type": "string"
            },
            "status": {
              "type": "string"
            }
          }
        },
        "LegalTypeFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalTypeFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalType": {
          "type": "object",
          "properties": {
            "legalType": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            },
            "displaySeq": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalTypeFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalType"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalType"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalStatusUpdateData": {
          "type": "object",
          "properties": {
            "legalStatusCode": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            },
            "displaySeq": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "isBankruptcy": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalStatusUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalStatusUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalStatusUpdateRes": {
          "type": "object",
          "properties": {
            "legalStatusCode": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalStatusFindData": {
          "type": "object",
          "properties": {
            "legalStatusCode": {
              "type": "string"
            },
            "isBankruptcy": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalStatusFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalStatusFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalStatus": {
          "type": "object",
          "properties": {
            "legalStatusCode": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            },
            "displaySeq": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "isBankruptcy": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalStatusFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalStatus"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalStatus"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalNameListTOData": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            }
          }
        },
        "LegalNameListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalNameListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalNameListTO": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "deptNm": {
              "type": "string"
            }
          }
        },
        "LegalNameListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalNameListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalNameListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseUpdateData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "legalType": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "requestCode": {
              "type": "string"
            },
            "legalStatus": {
              "type": "string"
            },
            "assignBy": {
              "type": "string"
            },
            "assignDt": {
              "type": "string"
            },
            "lawyerId": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "caseTypeName": {
              "type": "string"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "redCasePrefix": {
              "type": "string"
            },
            "redCaseNumber": {
              "type": "string"
            },
            "redCaseYear": {
              "type": "string"
            },
            "bcBlackCasePrefix": {
              "type": "string"
            },
            "bcBlackCaseNumber": {
              "type": "string"
            },
            "bcBlackCaseYear": {
              "type": "string"
            },
            "bcRedCasePrefix": {
              "type": "string"
            },
            "bcRedCaseNumber": {
              "type": "string"
            },
            "bcRedCaseYear": {
              "type": "string"
            },
            "plaintiff": {
              "type": "string"
            },
            "defendant": {
              "type": "string"
            },
            "litigant": {
              "type": "string"
            },
            "charge": {
              "type": "string"
            },
            "sueDate": {
              "type": "string"
            },
            "judgeDate": {
              "type": "string"
            },
            "dueExecutionDate": {
              "type": "string"
            },
            "defaultDate": {
              "type": "string"
            },
            "requestDate": {
              "type": "string"
            },
            "judgementStatus": {
              "type": "string"
            },
            "judgement": {
              "type": "string"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "totalAmt": {
              "type": "number",
              "format": "double"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            },
            "bankruptcyStatus": {
              "type": "string"
            }
          }
        },
        "LegalCaseUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseUpdateRes": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseListTOData": {
          "type": "object",
          "properties": {
            "legalType": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "legalStatus": {
              "type": "string"
            },
            "sueDateFrom": {
              "type": "string"
            },
            "sueDateTo": {
              "type": "string"
            }
          }
        },
        "LegalCaseListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseListTO": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "legalType": {
              "type": "string"
            },
            "legalTypeDesc": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "customerId": {
              "type": "integer",
              "format": "int32"
            },
            "cifNameSur": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "deptNmCtl": {
              "type": "string"
            },
            "requestCode": {
              "type": "string"
            },
            "legalStatus": {
              "type": "string"
            },
            "legalNameDesc": {
              "type": "string"
            },
            "assignDt": {
              "type": "string",
              "format": "date-time"
            },
            "lawyerId": {
              "type": "string"
            },
            "lawyerName": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "caseTypeName": {
              "type": "string"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "redCasePrefix": {
              "type": "string"
            },
            "redCaseNumber": {
              "type": "string"
            },
            "redCaseYear": {
              "type": "string"
            },
            "bcBlackCasePrefix": {
              "type": "string"
            },
            "bcBlackCaseNumber": {
              "type": "string"
            },
            "bcBlackCaseYear": {
              "type": "string"
            },
            "bcRedCasePrefix": {
              "type": "string"
            },
            "bcRedCaseNumber": {
              "type": "string"
            },
            "bcRedCaseYear": {
              "type": "string"
            },
            "plaintiff": {
              "type": "string"
            },
            "defendant": {
              "type": "string"
            },
            "litigant": {
              "type": "string"
            },
            "charge": {
              "type": "string"
            },
            "sueDate": {
              "type": "string",
              "format": "date-time"
            },
            "judgeDate": {
              "type": "string",
              "format": "date-time"
            },
            "dueExecutionDate": {
              "type": "string",
              "format": "date-time"
            },
            "defaultDate": {
              "type": "string",
              "format": "date-time"
            },
            "requestDate": {
              "type": "string",
              "format": "date-time"
            },
            "judgement_status": {
              "type": "string"
            },
            "judgement": {
              "type": "string"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "totalAmt": {
              "type": "number",
              "format": "double"
            },
            "babkruptcyStatus": {
              "type": "string"
            }
          }
        },
        "LegalCaseListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityUpdateData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "legalType": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "lawyerId": {
              "type": "string"
            },
            "transDt": {
              "type": "string"
            },
            "liabilityDetail": {
              "type": "string"
            },
            "issueDate": {
              "type": "string"
            },
            "meetingDate": {
              "type": "string"
            },
            "signDate": {
              "type": "string"
            },
            "panelOrderNo": {
              "type": "string"
            },
            "panelOrderDate": {
              "type": "string"
            },
            "sendDate": {
              "type": "string"
            },
            "viNo": {
              "type": "string"
            },
            "orderNo": {
              "type": "string"
            },
            "orderDate": {
              "type": "string"
            },
            "due2yearDate": {
              "type": "string"
            },
            "recordNo": {
              "type": "string"
            },
            "recordDate": {
              "type": "string"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "offerRecordNo": {
              "type": "string"
            },
            "offerRecordDate": {
              "type": "string"
            },
            "due1yearDate": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            },
            "resolution": {
              "type": "string"
            },
            "offerDeal": {
              "type": "string"
            },
            "orderRefNo": {
              "type": "string"
            },
            "orderRefDate": {
              "type": "string"
            },
            "receiveCondition": {
              "type": "string"
            },
            "receiveAmt": {
              "type": "number",
              "format": "double"
            },
            "sendLess1mDate": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityUpdateRes": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityPanelUpdateData": {
          "type": "object",
          "properties": {
            "panelSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityPanelUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityPanelUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityPanelUpdateRes": {
          "type": "object",
          "properties": {
            "panelSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityLegalCodeData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityLegalCodeReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityLegalCodeData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityPanelListTO": {
          "type": "object",
          "properties": {
            "panelSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityPanelListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityPanelListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityPanelListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityPanelFindData": {
          "type": "object",
          "properties": {
            "panelSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityPanelFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityPanelFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityPanel": {
          "type": "object",
          "properties": {
            "panelSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityPanelFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityPanel"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityPanel"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityOfficerUpdateData": {
          "type": "object",
          "properties": {
            "officerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityOfficerUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityOfficerUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityOfficerUpdateRes": {
          "type": "object",
          "properties": {
            "officerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityOfficerListTO": {
          "type": "object",
          "properties": {
            "officerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityOfficerListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityOfficerListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityOfficerListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityOfficerFindData": {
          "type": "object",
          "properties": {
            "officerSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityOfficerFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityOfficerFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityOfficer": {
          "type": "object",
          "properties": {
            "officerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityOfficerFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityOfficer"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityOfficer"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityLitigantUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityLitigantUpdateRes": {
          "type": "object",
          "properties": {
            "litigantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityLitigantListTO": {
          "type": "object",
          "properties": {
            "litigantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "litigantType": {
              "type": "string"
            },
            "litigantTypeName": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityLitigantListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityLitigantListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityLitigantListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityLitigantFindData": {
          "type": "object",
          "properties": {
            "litigantSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityLitigantFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityLitigantFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityLitigant": {
          "type": "object",
          "properties": {
            "litigantSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "litigantType": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityLitigantFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityLitigant"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityLitigant"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityListTOData": {
          "type": "object",
          "properties": {
            "issueDateFrom": {
              "type": "string"
            },
            "issueDateTo": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "legalType": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityListTO": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "legalType": {
              "type": "string"
            },
            "legalName": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "deptNmCtl": {
              "type": "string"
            },
            "lawyerName": {
              "type": "string"
            },
            "transDt": {
              "type": "string",
              "format": "date-time"
            },
            "liabilityDetail": {
              "type": "string"
            },
            "issueDate": {
              "type": "string",
              "format": "date-time"
            },
            "meetingDate": {
              "type": "string",
              "format": "date-time"
            },
            "signDate": {
              "type": "string",
              "format": "date-time"
            },
            "panelOrderNo": {
              "type": "string"
            },
            "panelOrderDate": {
              "type": "string",
              "format": "date-time"
            },
            "sendDate": {
              "type": "string",
              "format": "date-time"
            },
            "viNo": {
              "type": "string"
            },
            "orderNo": {
              "type": "string"
            },
            "orderDate": {
              "type": "string",
              "format": "date-time"
            },
            "due2yearDate": {
              "type": "string",
              "format": "date-time"
            },
            "recordNo": {
              "type": "string"
            },
            "recordDate": {
              "type": "string",
              "format": "date-time"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "offerRecordNo": {
              "type": "string"
            },
            "offerRecordDate": {
              "type": "string",
              "format": "date-time"
            },
            "due1yearDate": {
              "type": "string",
              "format": "date-time"
            },
            "resolution": {
              "type": "string"
            },
            "offerDeal": {
              "type": "string"
            },
            "orderRefNo": {
              "type": "string"
            },
            "orderRefDate": {
              "type": "string",
              "format": "date-time"
            },
            "receiveCondition": {
              "type": "string"
            },
            "receiveAmt": {
              "type": "number",
              "format": "double"
            },
            "sendLess1mDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityFindData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiability": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "legalType": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "lawyerId": {
              "type": "string"
            },
            "transDt": {
              "type": "string",
              "format": "date-time"
            },
            "liabilityDetail": {
              "type": "string"
            },
            "issueDate": {
              "type": "string",
              "format": "date-time"
            },
            "meetingDate": {
              "type": "string",
              "format": "date-time"
            },
            "signDate": {
              "type": "string",
              "format": "date-time"
            },
            "panelOrderNo": {
              "type": "string"
            },
            "panelOrderDate": {
              "type": "string",
              "format": "date-time"
            },
            "sendDate": {
              "type": "string",
              "format": "date-time"
            },
            "viNo": {
              "type": "string"
            },
            "orderNo": {
              "type": "string"
            },
            "orderDate": {
              "type": "string",
              "format": "date-time"
            },
            "due2yearDate": {
              "type": "string",
              "format": "date-time"
            },
            "recordNo": {
              "type": "string"
            },
            "recordDate": {
              "type": "string",
              "format": "date-time"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "offerRecordNo": {
              "type": "string"
            },
            "offerRecordDate": {
              "type": "string",
              "format": "date-time"
            },
            "due1yearDate": {
              "type": "string",
              "format": "date-time"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "resolution": {
              "type": "string"
            },
            "offerDeal": {
              "type": "string"
            },
            "orderRefNo": {
              "type": "string"
            },
            "orderRefDate": {
              "type": "string",
              "format": "date-time"
            },
            "receiveCondition": {
              "type": "string"
            },
            "receiveAmt": {
              "type": "number",
              "format": "double"
            },
            "sendLess1mDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiability"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiability"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerUpdateData": {
          "type": "object",
          "properties": {
            "exofficerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerUpdateRes": {
          "type": "object",
          "properties": {
            "exofficerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerListTO": {
          "type": "object",
          "properties": {
            "exofficerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerFindData": {
          "type": "object",
          "properties": {
            "exofficerSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficerFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficer": {
          "type": "object",
          "properties": {
            "exofficerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityExecutionOfficerFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficer"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityExecutionOfficer"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerUpdateData": {
          "type": "object",
          "properties": {
            "embezzlerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "percent": {
              "type": "number",
              "format": "double"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerUpdateRes": {
          "type": "object",
          "properties": {
            "embezzlerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerListTO": {
          "type": "object",
          "properties": {
            "embezzlerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "percent": {
              "type": "number",
              "format": "double"
            },
            "amount": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerFindData": {
          "type": "object",
          "properties": {
            "embezzlerSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzlerFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityEmbezzler": {
          "type": "object",
          "properties": {
            "embezzlerSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "nameSur": {
              "type": "string"
            },
            "percent": {
              "type": "number",
              "format": "double"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityEmbezzlerFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzler"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityEmbezzler"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachUpdateData": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachUpdateRes": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachListTO": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeId": {
              "type": "string"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "userName": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "urlLegalCaseLiabilityFile": {
              "type": "string"
            },
            "urlLegalCaseFileLiabilityThumbnail": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachFindData": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttachFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttach": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "urlLegalCaseLiabilityFile": {
              "type": "string"
            },
            "urlLegalCaseFileLiabilityThumbnail": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityDocumentAttachFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttach"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityDocumentAttach"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityCapitalUpdateData": {
          "type": "object",
          "properties": {
            "capitalSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "capitalName": {
              "type": "string"
            },
            "assessmentAmt": {
              "type": "number",
              "format": "double"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityCapitalUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityCapitalUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityCapitalUpdateRes": {
          "type": "object",
          "properties": {
            "capitalSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityCapitalListTO": {
          "type": "object",
          "properties": {
            "capitalSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "capitalName": {
              "type": "string"
            },
            "assessmentAmt": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "LegalCaseLiabilityCapitalListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityCapitalListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityCapitalListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityCapitalFindData": {
          "type": "object",
          "properties": {
            "capitalSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityCapitalFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityCapitalFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityCapital": {
          "type": "object",
          "properties": {
            "capitalSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "capitalName": {
              "type": "string"
            },
            "assessmentAmt": {
              "type": "number",
              "format": "double"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityCapitalFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityCapital"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityCapital"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentUpdateData": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "accountNo": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentUpdateRes": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentListTO": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "accountNo": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentFindData": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupmentFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupment": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "accountNo": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityAccountRecoupmentFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupment"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityAccountRecoupment"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiryUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiryUpdateRes": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiryListTO": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "accountNo": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiryListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiryListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiryFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityLitigantAccountInquiryFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseLiabilityLitigantAccountInquiryFindData": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiry": {
          "type": "object",
          "properties": {
            "accountSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "accountNo": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseLiabilityAccountInquiryFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiry"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseLiabilityAccountInquiry"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseHighCourtUpdateData": {
          "type": "object",
          "properties": {
            "highCourtSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "courtLevel": {
              "type": "string"
            },
            "requestDate": {
              "type": "string"
            },
            "blackCaseNo": {
              "type": "string"
            },
            "redCaseNo": {
              "type": "string"
            },
            "orderNo": {
              "type": "string"
            },
            "readDate": {
              "type": "string"
            },
            "orderDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseHighCourtUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseHighCourtUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseHighCourtUpdateRes": {
          "type": "object",
          "properties": {
            "highCourtSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseHighCourtListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseHighCourtListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseHighCourtListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseHighCourtListTO": {
          "type": "object",
          "properties": {
            "highCourtSeq": {
              "type": "integer",
              "format": "int32"
            },
            "courtLevel": {
              "type": "string"
            },
            "courtLevelName": {
              "type": "string"
            },
            "requestDate": {
              "type": "string",
              "format": "date-time"
            },
            "blackCaseNo": {
              "type": "string"
            },
            "redCaseNo": {
              "type": "string"
            },
            "orderNo": {
              "type": "string"
            },
            "readDate": {
              "type": "string",
              "format": "date-time"
            },
            "orderDetail": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "userName": {
              "type": "string"
            },
            "update_DT": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseHighCourtListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseHighCourtListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseHighCourtListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseHighCourtData": {
          "type": "object",
          "properties": {
            "highCourtSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseHighCourtReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseHighCourtData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseHighCourt": {
          "type": "object",
          "properties": {
            "highCourtSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "courtLevel": {
              "type": "string"
            },
            "requestDate": {
              "type": "string",
              "format": "date-time"
            },
            "blackCaseNo": {
              "type": "string"
            },
            "redCaseNo": {
              "type": "string"
            },
            "orderNo": {
              "type": "string"
            },
            "readDate": {
              "type": "string",
              "format": "date-time"
            },
            "orderDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseHighCourtRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseHighCourt"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseHighCourt"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseFindData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCase": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            },
            "legalType": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            },
            "requestCode": {
              "type": "string"
            },
            "legalStatus": {
              "type": "string"
            },
            "assignBy": {
              "type": "string"
            },
            "assignDt": {
              "type": "string",
              "format": "date-time"
            },
            "lawyerId": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "caseTypeName": {
              "type": "string"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "redCasePrefix": {
              "type": "string"
            },
            "redCaseNumber": {
              "type": "string"
            },
            "redCaseYear": {
              "type": "string"
            },
            "bcBlackCasePrefix": {
              "type": "string"
            },
            "bcBlackCaseNumber": {
              "type": "string"
            },
            "bcBlackCaseYear": {
              "type": "string"
            },
            "bcRedCasePrefix": {
              "type": "string"
            },
            "bcRedCaseNumber": {
              "type": "string"
            },
            "bcRedCaseYear": {
              "type": "string"
            },
            "plaintiff": {
              "type": "string"
            },
            "defendant": {
              "type": "string"
            },
            "litigant": {
              "type": "string"
            },
            "charge": {
              "type": "string"
            },
            "sueDate": {
              "type": "string",
              "format": "date-time"
            },
            "judgeDate": {
              "type": "string",
              "format": "date-time"
            },
            "dueExecutionDate": {
              "type": "string",
              "format": "date-time"
            },
            "defaultDate": {
              "type": "string",
              "format": "date-time"
            },
            "requestDate": {
              "type": "string",
              "format": "date-time"
            },
            "judgementStatus": {
              "type": "string"
            },
            "judgement": {
              "type": "string"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "totalAmt": {
              "type": "number",
              "format": "double"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "bankruptcyStatus": {
              "type": "string"
            }
          }
        },
        "LegalCaseFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCase"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCase"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseEnforcementUpdateData": {
          "type": "object",
          "properties": {
            "enforcementSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "sendDate": {
              "type": "string"
            },
            "announceDate": {
              "type": "string"
            },
            "seizeDate": {
              "type": "string"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "pauseCase": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            },
            "requestDate": {
              "type": "string"
            }
          }
        },
        "LegalCaseEnforcementUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseEnforcementUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseEnforcementUpdateRes": {
          "type": "object",
          "properties": {
            "enforcementSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseEnforcementListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseEnforcementListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseEnforcementListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseEnforcementListTO": {
          "type": "object",
          "properties": {
            "enforcementSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "sendDate": {
              "type": "string",
              "format": "date-time"
            },
            "announceDate": {
              "type": "string",
              "format": "date-time"
            },
            "seizeDate": {
              "type": "string",
              "format": "date-time"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "provinceDescription": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "courtName": {
              "type": "string"
            },
            "blackCasePrefix": {
              "type": "string"
            },
            "blackCaseNumber": {
              "type": "string"
            },
            "blackCaseYear": {
              "type": "string"
            },
            "redCasePrefix": {
              "type": "string"
            },
            "redCaseNumber": {
              "type": "string"
            },
            "redCaseYear": {
              "type": "string"
            },
            "plaintiff": {
              "type": "string"
            },
            "defendant": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "pauseCase": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "requestDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseEnforcementListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseEnforcementListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseEnforcementListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseEnforcementFindData": {
          "type": "object",
          "properties": {
            "enforcementSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseEnforcementFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseEnforcementFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseEnforcement": {
          "type": "object",
          "properties": {
            "enforcementSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "sendDate": {
              "type": "string",
              "format": "date-time"
            },
            "announceDate": {
              "type": "string",
              "format": "date-time"
            },
            "seizeDate": {
              "type": "string",
              "format": "date-time"
            },
            "provinceId": {
              "type": "integer",
              "format": "int32"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "pauseCase": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "requestDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseEnforcementFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseEnforcement"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseEnforcement"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDocumentAttachUpdateData": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttachUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDocumentAttachUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttachUpdateRes": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDocumentAttachListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttachListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDocumentAttachListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttachListTO": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "userName": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "urlLegalCaseFile": {
              "type": "string"
            },
            "urlLegalCaseFileThumbnail": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttachListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseDocumentAttachListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseDocumentAttachListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDocumentAttachData": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseDocumentAttachReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseDocumentAttachData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttach": {
          "type": "object",
          "properties": {
            "attachSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "attachTypeId": {
              "type": "integer",
              "format": "int32"
            },
            "attachFileExt": {
              "type": "string"
            },
            "attachFileOriginalName": {
              "type": "string"
            },
            "attachFileName": {
              "type": "string"
            },
            "attachDetail": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "createBy": {
              "type": "string"
            },
            "createDt": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "urlLegalCaseFile": {
              "type": "string"
            },
            "urlLegalCaseFileThumbnail": {
              "type": "string"
            }
          }
        },
        "LegalCaseDocumentAttachRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseDocumentAttach"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseDocumentAttach"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseCostUpdateData": {
          "type": "object",
          "properties": {
            "costSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "costType": {
              "type": "string"
            },
            "costCode": {
              "type": "string"
            },
            "transDt": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "costAmt": {
              "type": "number",
              "format": "double"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseCostUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseCostUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseCostUpdateRes": {
          "type": "object",
          "properties": {
            "costSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseCostListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "costType": {
              "type": "string"
            }
          }
        },
        "LegalCaseCostListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseCostListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseCostListTO": {
          "type": "object",
          "properties": {
            "costSeq": {
              "type": "integer",
              "format": "int32"
            },
            "costCode": {
              "type": "string"
            },
            "costCodeDesc": {
              "type": "string"
            },
            "transDt": {
              "type": "string",
              "format": "date-time"
            },
            "remark": {
              "type": "string"
            },
            "costAmt": {
              "type": "number",
              "format": "double"
            },
            "userName": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseCostListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseCostListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseCostListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseCostFindData": {
          "type": "object",
          "properties": {
            "costSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseCostFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseCostFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseCost": {
          "type": "object",
          "properties": {
            "costSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "costType": {
              "type": "string"
            },
            "costCode": {
              "type": "string"
            },
            "transDt": {
              "type": "string",
              "format": "date-time"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "costAmt": {
              "type": "number",
              "format": "double"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseCostFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseCost"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseCost"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseBankUpdateData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "haveCapital": {
              "type": "string"
            },
            "capital": {
              "type": "number",
              "format": "double"
            },
            "capitalBank": {
              "type": "number",
              "format": "double"
            },
            "howToSend": {
              "type": "string"
            },
            "sendDate": {
              "type": "string"
            },
            "risk": {
              "type": "string"
            },
            "damage": {
              "type": "string"
            },
            "follow": {
              "type": "string"
            },
            "execution": {
              "type": "string"
            },
            "writeOff": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseBankUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseBankUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseBankUpdateRes": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseBankData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseBankReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseBankData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseBank": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            },
            "haveCapital": {
              "type": "string"
            },
            "capital": {
              "type": "number",
              "format": "double"
            },
            "capitalBank": {
              "type": "number",
              "format": "double"
            },
            "howToSend": {
              "type": "string"
            },
            "sendDate": {
              "type": "string",
              "format": "date-time"
            },
            "risk": {
              "type": "string"
            },
            "damage": {
              "type": "string"
            },
            "follow": {
              "type": "string"
            },
            "execution": {
              "type": "string"
            },
            "writeOff": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseBankRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseBank"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseBank"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionUpdateData": {
          "type": "object",
          "properties": {
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "auctionNo": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "pauseCase": {
              "type": "string"
            },
            "remarkPauseCase": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionUpdateRes": {
          "type": "object",
          "properties": {
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionListData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionListReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionListData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuction": {
          "type": "object",
          "properties": {
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "auctionNo": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "pauseCase": {
              "type": "string"
            },
            "remarkPauseCase": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseAuctionFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAuction"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuction"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionFindData": {
          "type": "object",
          "properties": {
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentUpdateData": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentNo": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentDate": {
              "type": "string"
            },
            "sellDate": {
              "type": "string"
            },
            "sellAmt": {
              "type": "number",
              "format": "double"
            },
            "nameSur": {
              "type": "string"
            },
            "receiveDate": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentUpdateRes": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentListTOData": {
          "type": "object",
          "properties": {
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentListTO": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentNo": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentDate": {
              "type": "string",
              "format": "date-time"
            },
            "sellDate": {
              "type": "string",
              "format": "date-time"
            },
            "sellAmt": {
              "type": "number",
              "format": "double"
            },
            "nameSur": {
              "type": "string"
            },
            "receiveDate": {
              "type": "string",
              "format": "date-time"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAuctionAppointmentListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentFindData": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointment": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "auctionSeq": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentNo": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentDate": {
              "type": "string",
              "format": "date-time"
            },
            "sellDate": {
              "type": "string",
              "format": "date-time"
            },
            "sellAmt": {
              "type": "number",
              "format": "double"
            },
            "nameSur": {
              "type": "string"
            },
            "receiveDate": {
              "type": "string",
              "format": "date-time"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseAuctionAppointmentFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAuctionAppointment"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointment"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralUpdateData": {
          "type": "object",
          "properties": {
            "appCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "clId": {
              "type": "integer",
              "format": "int32"
            },
            "isCheck": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralUpdateRes": {
          "type": "object",
          "properties": {
            "appCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralListTOData": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralListTO": {
          "type": "object",
          "properties": {
            "appCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "clId": {
              "type": "integer",
              "format": "int32"
            },
            "contractCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "collateralDetail": {
              "type": "string"
            },
            "officerAppraisalPrice": {
              "type": "number",
              "format": "double"
            },
            "isCheck": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralFindData": {
          "type": "object",
          "properties": {
            "appCollSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateralFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateral": {
          "type": "object",
          "properties": {
            "appCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "contractCollSeq": {
              "type": "integer",
              "format": "int32"
            },
            "clId": {
              "type": "integer",
              "format": "int32"
            },
            "isCheck": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseAuctionAppointmentCollateralFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateral"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAuctionAppointmentCollateral"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAppointmentUpdateData": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "appointmentCode": {
              "type": "string"
            },
            "appointmentDate": {
              "type": "string"
            },
            "timePeriod": {
              "type": "string"
            },
            "appointmentTimeBegin": {
              "type": "string"
            },
            "appointmentTimeEnd": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "LegalCaseAppointmentUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAppointmentUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAppointmentUpdateRes": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAppointmentListTOData": {
          "type": "object",
          "properties": {
            "legalCode": {
              "type": "string"
            }
          }
        },
        "LegalCaseAppointmentListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAppointmentListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAppointmentListTO": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "appointmentDate": {
              "type": "string",
              "format": "date-time"
            },
            "timePeriod": {
              "type": "string"
            },
            "appointmentTimeBegin": {
              "type": "string"
            },
            "appointmentTimeEnd": {
              "type": "string"
            },
            "appointmentCode": {
              "type": "string"
            },
            "appointmentName": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "courtName": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAppointmentListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAppointmentListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAppointmentListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAppointmentData": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "LegalCaseAppointmentReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/LegalCaseAppointmentData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "LegalCaseAppointment": {
          "type": "object",
          "properties": {
            "appointmentSeq": {
              "type": "integer",
              "format": "int32"
            },
            "legalCode": {
              "type": "string"
            },
            "appointmentCode": {
              "type": "string"
            },
            "appointmentDate": {
              "type": "string",
              "format": "date-time"
            },
            "timePeriod": {
              "type": "string"
            },
            "appointmentTimeBegin": {
              "type": "string"
            },
            "appointmentTimeEnd": {
              "type": "string"
            },
            "courtId": {
              "type": "integer",
              "format": "int32"
            },
            "isDeleted": {
              "type": "integer",
              "format": "int32"
            },
            "remark": {
              "type": "string"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "LegalCaseAppointmentRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LegalCaseAppointment"
              }
            },
            "data": {
              "$ref": "#/components/schemas/LegalCaseAppointment"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCustomerInfoUpdateData": {
          "type": "object",
          "properties": {
            "cifNo": {
              "type": "string"
            },
            "cifNameSur": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCustomerInfoUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CbsCustomerInfoUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CbsCustomerInfoUpdateRes": {
          "type": "object",
          "properties": {
            "cifNo": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCustomerInfoListTOData": {
          "type": "object",
          "properties": {
            "firstName": {
              "type": "string"
            },
            "cifNo": {
              "type": "string"
            }
          }
        },
        "CbsCustomerInfoListTOReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CbsCustomerInfoListTOData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CbsCustomerInfoListTO": {
          "type": "object",
          "properties": {
            "customerId": {
              "type": "integer",
              "format": "int32"
            },
            "cifNo": {
              "type": "string"
            },
            "cifNameSur": {
              "type": "string"
            },
            "cifContractNo": {
              "type": "string"
            }
          }
        },
        "CbsCustomerInfoListTORes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CbsCustomerInfoListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/CbsCustomerInfoListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCifContractFindData": {
          "type": "object",
          "properties": {
            "cifNo": {
              "type": "string"
            }
          }
        },
        "CbsCustomerInfoFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CbsCifContractFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CbsCustomerInfo": {
          "type": "object",
          "properties": {
            "cifNo": {
              "type": "string"
            },
            "cifNameSur": {
              "type": "string"
            },
            "deptId": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCustomerInfoFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CbsCustomerInfo"
              }
            },
            "data": {
              "$ref": "#/components/schemas/CbsCustomerInfo"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCifContractUpdateData": {
          "type": "object",
          "properties": {
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "cifNo": {
              "type": "string"
            },
            "contractNo": {
              "type": "string"
            },
            "contractType": {
              "type": "string"
            },
            "collateral": {
              "type": "string"
            },
            "marketCode": {
              "type": "string"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "suePrincipleAmt": {
              "type": "number",
              "format": "double"
            },
            "sueInterestAmt": {
              "type": "number",
              "format": "double"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            },
            "legalCode": {
              "type": "string"
            }
          }
        },
        "CbsCifContractUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CbsCifContractUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CbsCifContractUpdateRes": {
          "type": "object",
          "properties": {
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCifContractListData": {
          "type": "object",
          "properties": {
            "cifNo": {
              "type": "string"
            },
            "legalCode": {
              "type": "string"
            }
          }
        },
        "CbsCifContractListReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CbsCifContractListData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CbsCifContract": {
          "type": "object",
          "properties": {
            "contractId": {
              "type": "integer",
              "format": "int32"
            },
            "cifNo": {
              "type": "string"
            },
            "contractNo": {
              "type": "string"
            },
            "contractType": {
              "type": "string"
            },
            "collateral": {
              "type": "string"
            },
            "marketCode": {
              "type": "string"
            },
            "principleAmt": {
              "type": "number",
              "format": "double"
            },
            "interestAmt": {
              "type": "number",
              "format": "double"
            },
            "suePrincipleAmt": {
              "type": "number",
              "format": "double"
            },
            "sueInterestAmt": {
              "type": "number",
              "format": "double"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            },
            "legalCode": {
              "type": "string"
            }
          }
        },
        "CbsCifContractFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CbsCifContract"
              }
            },
            "data": {
              "$ref": "#/components/schemas/CbsCifContract"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CbsCifContractFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CbsCifContractFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CaseTypeUpdateData": {
          "type": "object",
          "properties": {
            "caseTypeCode": {
              "type": "string"
            },
            "caseTypeName": {
              "type": "string"
            },
            "displaySeq": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "isBranchCase": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string"
            }
          }
        },
        "CaseTypeUpdateReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CaseTypeUpdateData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CaseTypeUpdateRes": {
          "type": "object",
          "properties": {
            "caseTypeCode": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CaseTypeNameListTO": {
          "type": "object",
          "properties": {
            "caseTypeName": {
              "type": "string"
            }
          }
        },
        "CaseTypeNameRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CaseTypeNameListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/CaseTypeNameListTO"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CaseTypeFindData": {
          "type": "object",
          "properties": {
            "caseTypeCode": {
              "type": "string"
            },
            "isBranchCase": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CaseTypeFindReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/CaseTypeFindData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "CaseType": {
          "type": "object",
          "properties": {
            "caseTypeCode": {
              "type": "string"
            },
            "caseTypeName": {
              "type": "string"
            },
            "displaySeq": {
              "type": "integer",
              "format": "int32"
            },
            "status": {
              "type": "string"
            },
            "isBranchCase": {
              "type": "integer",
              "format": "int32"
            },
            "updateBy": {
              "type": "string"
            },
            "updateDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "CaseTypeFindRes": {
          "type": "object",
          "properties": {
            "dataList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CaseTypeListTO"
              }
            },
            "data": {
              "$ref": "#/components/schemas/CaseType"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "CaseTypeListTO": {
          "type": "object",
          "properties": {
            "caseTypeCode": {
              "type": "string"
            },
            "caseTypeName": {
              "type": "string"
            }
          }
        },
        "UploadFileRes": {
          "type": "object",
          "properties": {
            "filename": {
              "type": "string"
            },
            "filePath": {
              "type": "string"
            },
            "fileUrl": {
              "type": "string"
            },
            "filenameThumbnail": {
              "type": "string"
            },
            "filePathThumbnail": {
              "type": "string"
            },
            "fileUrlThumbnail": {
              "type": "string"
            },
            "errorcode": {
              "type": "integer",
              "format": "int32"
            },
            "errormessage": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "UploadFileData": {
          "type": "object",
          "properties": {
            "fileType": {
              "type": "string"
            },
            "fileBase64": {
              "type": "string"
            },
            "isTempFile": {
              "type": "boolean"
            }
          }
        },
        "UploadFileReq": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/UploadFileData"
            },
            "userInfo": {
              "type": "string"
            },
            "mode": {
              "type": "string"
            },
            "menuCode": {
              "type": "string"
            },
            "lang": {
              "type": "string"
            }
          }
        },
        "AppCommonInfoResp": {
          "type": "object",
          "properties": {
            "serverId": {
              "type": "string"
            },
            "restUuid": {
              "type": "string"
            },
            "infoDesc": {
              "type": "string"
            },
            "infoLastBuild": {
              "type": "string"
            },
            "infoVersion": {
              "type": "string"
            },
            "infoCurrentDt": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "CheckInfoResp": {
          "type": "object",
          "properties": {
            "serverId": {
              "type": "string"
            },
            "serverDateTime": {
              "type": "string"
            },
            "serverContextPath": {
              "type": "string"
            }
          }
        }
      }
    }
  }
