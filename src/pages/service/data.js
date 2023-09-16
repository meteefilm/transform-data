export const data = {
    openapi: '3.0.1',
    info: {
        title: 'GSB App API',
        contact: {
            name: 'Sense Info Tech Software',
            url: 'http://www.sense-infotech.com/',
            email: 'sense@sense-infotech.com'
        },
        version: '1.0'
    },
    servers: [
        {
            url: 'http://sitdev.dyndns.org:9148/GSBCustService',
            description: 'Generated server url'
        }
    ],
    paths: {
        '/rest/internal/app/cust/cust_guarantor_telephone_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_TELEPHONE_UPDATE',
                operationId: 'custGuarantorTelephoneUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorTelephoneUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorTelephoneUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_telephone_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_TELEPHONE_LIST_TO',
                operationId: 'custGuarantorTelephoneListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorTelephoneListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorTelephoneListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_telephone_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_TELEPHONE_FIND',
                operationId: 'custGuarantorTelephoneFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorTelephoneFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorTelephoneFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_info_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_INFO_UPDATE',
                operationId: 'custGuarantorInfoUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorInfoUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorInfoUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_info_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_INFO_LIST_TO',
                operationId: 'custGuarantorInfoListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorInfoListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorInfoListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_info_find_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_INFO_FIND_TO',
                operationId: 'custGuarantorInfoFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorInfoFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_info_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_INFO_FIND',
                operationId: 'custGuarantorInfoFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorInfoFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorInfoFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_info_debtor_information': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_INFO_DEBTOR_INFORMATION',
                operationId: 'custGuarantorInfoDebtorInformation',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorInfoDebtorInformationReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorInfoDebtorInformationRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_decease_attach_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_DECEASE_ATTACH_UPDATE',
                operationId: 'custGuarantorDeceaseAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorDeceaseAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorDeceaseAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_decease_attach_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_DECEASE_ATTACH_LIST_TO',
                operationId: 'CustGuarantorDeceaseAttachListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorDeceaseAttachListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorDeceaseAttachListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_decease_attach_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_DECEASE_ATTACH_FIND',
                operationId: 'custGuarantorDeceaseAttachFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorDeceaseAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorDeceaseAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_contact_person_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CONTACT_PERSON_UPDATE',
                operationId: 'custGuarantorContactPersonUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorContactPersonUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorContactPersonUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_contact_person_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CONTACT_PERSON_LIST_TO',
                operationId: 'custGuarantorContactPerson',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorContactPersonListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorContactPersonListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_contact_person_find_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CONTACT_PERSON_FIND_TO',
                operationId: 'custGuarantorContactPersonFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorContactPersonFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorContactPersonFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_contact_person_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CONTACT_PERSON_FIND',
                operationId: 'custGuarantorContactPersonFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorContactPersonFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorContactPersonFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_contact_person_card_attach_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CONTACT_PERSON_CARD_ATTACH_UPDATE',
                operationId: 'custGuarantorContactPersonCardAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorContactPersonCardAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorContactPersonCardAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_contact_person_card_attach_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CONTACT_PERSON_CARD_ATTACH_FIND',
                operationId: 'custGuarantorContactPersonCardAttachFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorContactPersonCardAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorContactPersonCardAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_closedown_attach_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CLOSEDOWN_ATTACH_UPDATE',
                operationId: 'custGuarantorClosedownAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorClosedownAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorClosedownAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_closedown_attach_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CLOSEDOWN_ATTACH_LIST_TO',
                operationId: 'custGuarantorClosedownAttachListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorClosedownAttachListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorClosedownAttachListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_closedown_attach_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CLOSEDOWN_ATTACH_FIND',
                operationId: 'custGuarantorClosedownAttach',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorClosedownAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorClosedownAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_card_attach_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CARD_ATTACH_UPDATE',
                operationId: 'custGuarantorCardAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorCardAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorCardAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_card_attach_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CARD_ATTACH_LIST_TO',
                operationId: 'custGuarantorCardAttachListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorCardAttachListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorCardAttachListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_card_attach_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_CARD_ATTACH_FIND',
                operationId: 'custGuarantorCardAttachFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorCardAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorCardAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_address_update': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_ADDRESS_UPDATE',
                operationId: 'custGuarantorAddressUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorAddressUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorAddressUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_address_list_to': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_ADDRESS_LIST_TO',
                operationId: 'custGuarantorAddressListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorAddressListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorAddressListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_guarantor_address_find': {
            post: {
                tags: ['App Cust Guarantor Service'],
                summary: 'CUST_GUARANTOR_ADDRESS_FIND',
                operationId: 'custGuarantorAddressFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustGuarantorAddressFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustGuarantorAddressFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_executor_info_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_EXECUTOR_INFO_UPDATE',
                operationId: 'CustExecutorInfoUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustExecutorInfoUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustExecutorInfoUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_executor_info_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_EXECUTOR_INFO_LIST_TO',
                operationId: 'CustExecutorInfoListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustExecutorInfoListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustExecutorInfoListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_executor_info_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_EXECUTOR_INFO_FIND',
                operationId: 'custExecutorInfoFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustExecutorInfoFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustExecutorInfoFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_telephone_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_TELEPHONE_UPDATE',
                operationId: 'custCustomerTelephoneUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerTelephoneUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerTelephoneUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_telephone_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_TELEPHONE_LIST_TO',
                operationId: 'custCustomerTelephoneListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerTelephoneListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerTelephoneListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_telephone_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_TELEPHONE_FIND',
                operationId: 'custCustomerTelephoneFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerTelephoneFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerTelephoneFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_UPDATE',
                operationId: 'custCustomerInfoUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_related_person_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_RELATED_PERSON_TO',
                operationId: 'custCustomerInfoRelatedPersonTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_own_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_OWN_TO',
                operationId: 'CustCustomerInfoOwnTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoOwnTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_LIST_TO',
                operationId: 'custCustomerInfoListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_guarantor_person_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_GUARANTOR_PERSON_TO',
                operationId: 'custCustomerInfoGuarantorPersonTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoGuarantorPersonTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_find_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_FIND_TO',
                operationId: 'custCustomerInfoFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_FIND',
                operationId: 'custCustomerInfoFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_debtor_person_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_DEBTOR_PERSON_TO',
                operationId: 'custCustomerInfoDebtorPersonTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoDebtorPersonTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_debtor_information': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_DEBTOR_INFORMATION',
                operationId: 'custCustomerInfoDebtorInformation',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoDebtorInformationRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_customer': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_CUSTOMER',
                operationId: 'custCustomerInfoCustomer',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoCustomerReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoCustomerRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_cust_detail_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_CUST_DETAIL_LIST_TO',
                operationId: 'custCustomerInfoCustDetailListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoCustDetailListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoCustDetailListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_cif_no_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_CIF_NO_LIST_TO',
                operationId: 'custCustomerInfoCifNoListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoCifNoListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoCifNoListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_cif_no_find_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_CIF_NO_FIND_TO',
                operationId: 'custCustomerInfoCifNoFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoCifNoListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoCifNoListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_borrower_group_code': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_BORROWER_GROUP_CODE',
                operationId: 'custCustomerInfoBorrowerGroupCode',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoBorrowerGroupCodeRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_borrower_code_old': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_BORROWER_CODE_OLD',
                operationId: 'custCustomerInfoBorrowerCodeOld',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoBorrowerCodeOldRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_info_borrower_code': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_INFO_BORROWER_CODE',
                operationId: 'custCustomerInfoBorrowerCode',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerInfoBorrowerCodeRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_decease_attach_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_DECEASE_ATTACH_UPDATE',
                operationId: 'custCustomerDeceaseAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerDeceaseAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerDeceaseAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_decease_attach_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_DECEASE_ATTACH_LIST_TO',
                operationId: 'CustCustomerDeceaseAttachListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerDeceaseAttachListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerDeceaseAttachListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_decease_attach_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_DECEASE_ATTACH_FIND',
                operationId: 'custCustomerDeceaseAttachFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerDeceaseAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerDeceaseAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_closedown_attach_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_CLOSEDOWN_ATTACH_UPDATE',
                operationId: 'custCustomerClosedownAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerClosedownAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerClosedownAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_closedown_attach_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_CLOSEDOWN_ATTACH_LIST_TO',
                operationId: 'custCustomerClosedownAttachListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerClosedownAttachListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerClosedownAttachListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_closedown_attach_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_CLOSEDOWN_ATTACH_FIND',
                operationId: 'custCustomerClosedownAttach',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerClosedownAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerClosedownAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_card_attach_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_CARD_ATTACH_UPDATE',
                operationId: 'custCustomerCardAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerCardAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerCardAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_card_attach_idcard_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_CARD_ATTACH_IDCARD_LIST_TO',
                operationId: 'custCustomerCardAttachIdcardListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerCardAttachIdcardFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_card_attach_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_CARD_ATTACH_FIND',
                operationId: 'custCustomerCardAttachFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerCardAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerCardAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_address_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_ADDRESS_UPDATE',
                operationId: 'custCustomerAddressUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerAddressUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerAddressUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_address_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_ADDRESS_LIST_TO',
                operationId: 'CustCustomerAddressListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerAddressListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerAddressListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_address_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_ADDRESS_FIND',
                operationId: 'custCustomerAddressFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerAddressFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerAddressFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_account_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_ACCOUNT_UPDATE',
                operationId: 'custCustomerAccountUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerAccountUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerAccountUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_customer_account_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CUSTOMER_ACCOUNT_FIND',
                operationId: 'custCustomerAccountFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerAccountFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCustomerAccountFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_UPDATE',
                operationId: 'custContactPersonUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustContactPersonUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_LIST_TO',
                operationId: 'custContactPersonListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustContactPersonListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_find_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_FIND_TO',
                operationId: 'custContactPersonFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCustomerInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_FIND',
                operationId: 'custContactPersonFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustContactPersonFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_card_attach_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_CARD_ATTACH_UPDATE',
                operationId: 'custContactPersonCardAttachUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustContactPersonCardAttachUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonCardAttachUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_card_attach_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_CARD_ATTACH_LIST_TO',
                operationId: 'custContactPersonCardAttachListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustContactPersonCardAttachListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonCardAttachListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_contact_person_card_attach_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_CONTACT_PERSON_CARD_ATTACH_FIND',
                operationId: 'custContactPersonCardAttachFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustContactPersonCardAttachFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustContactPersonCardAttachFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_collateral_land_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_COLLATERAL_LAND_UPDATE',
                operationId: 'custCollateralLandUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCollateralLandUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCollateralLandUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_collateral_land_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_COLLATERAL_LAND_LIST_TO',
                operationId: 'custCollateralLandListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCollateralLandListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCollateralLandListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_collateral_land_information': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_COLLATERAL_LAND_INFORMATION',
                operationId: 'custCollateralLandInformation',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCollateralLandInformationReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCollateralLandInformationRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_collateral_land_find_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_COLLATERAL_LAND_FIND_TO',
                operationId: 'custCollateralLandFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCollateralLandListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCollateralLandListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_collateral_land_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_COLLATERAL_LAND_FIND',
                operationId: 'custCollateralLandFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustCollateralLandFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustCollateralLandFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_mapping_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_MAPPING_UPDATE',
                operationId: 'custBorrowerMappingUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerMappingUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerMappingUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_mapping_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_MAPPING_FIND',
                operationId: 'custBorrowerMappingFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerMappingFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerMappingFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_UPDATE',
                operationId: 'custBorrowerInfoUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerInfoUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_LIST_TO',
                operationId: 'custBorrowerInfoListTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerInfoListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_find_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_FIND_TO',
                operationId: 'custBorrowerInfoCustomerFindTORes',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_FIND',
                operationId: 'custBorrowerInfoFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerInfoFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_customer_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_CUSTOMER_LIST_TO',
                operationId: 'custBorrowerInfoCustomerListTORes',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerInfoCustomerListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoCustomerListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_borrower_group_code': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_BORROWER_GROUP_CODE',
                operationId: 'custBorrowerInfoBorrowerGroupCode',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoBorrowerGroupCodeRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_borrower_find_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_BORROWER_FIND_TO',
                operationId: 'custBorrowerInfoBorrowerFindTO',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerInfoFindTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoBorrowerFindTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_borrower_code_old': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_BORROWER_CODE_OLD',
                operationId: 'custBorrowerInfoBorrowerCodeOld',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoBorrowerCodeOldRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_info_borrower_code': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_INFO_BORROWER_CODE',
                operationId: 'custBorrowerInfoBorrowerCode',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerInfoBorrowerCodeRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_group_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_GROUP_UPDATE',
                operationId: 'custBorrowerGroupUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerGroupUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerGroupUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_group_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_GROUP_FIND',
                operationId: 'custBorrowerGroupFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerGroupFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerGroupFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_detail_update': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_DETAIL_UPDATE',
                operationId: 'custBorrowerDetailUpdate',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerDetailUpdateReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerDetailUpdateRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_detail_list_to': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_DETAIL_LIST_TO',
                operationId: 'custBorrowerInfoCustomerListTORes_1',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerDetailListTOReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerDetailListTORes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/cust/cust_borrower_detail_find': {
            post: {
                tags: ['App Cust Service'],
                summary: 'CUST_BORROWER_DETAIL_FIND',
                operationId: 'custBorrowerDetailFind',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustBorrowerDetailFindReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CustBorrowerDetailFindRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/common/upload_multipart_file': {
            post: {
                tags: ['App Common Service'],
                summary: 'Upload Multipart File',
                operationId: 'uploadMultipartFile',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: true,
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'multipart/form-data': {
                            schema: {
                                required: ['file', 'uploadFileReq'],
                                type: 'object',
                                properties: {
                                    uploadFileReq: {
                                        type: 'string'
                                    },
                                    file: {
                                        type: 'string',
                                        format: 'binary'
                                    }
                                }
                            }
                        },
                        'application/json': {
                            schema: {
                                required: ['file', 'uploadFileReq'],
                                type: 'object',
                                properties: {
                                    uploadFileReq: {
                                        type: 'string'
                                    },
                                    file: {
                                        type: 'string',
                                        format: 'binary'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/UploadFileRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/common/upload_file': {
            post: {
                tags: ['App Common Service'],
                summary: 'Upload File',
                operationId: 'uploadFile',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: true,
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UploadFileReq'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/UploadFileRes'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/common/reload_config': {
            get: {
                tags: ['App Common Service'],
                summary: 'Reload Config',
                operationId: 'reload',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/common/info': {
            get: {
                tags: ['App Common Service'],
                summary: 'App Common Info',
                operationId: 'info',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/AppCommonInfoResp'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/rest/internal/app/common/check_info': {
            get: {
                tags: ['App Common Service'],
                summary: 'Check Info',
                operationId: 'checkInfo',
                parameters: [
                    {
                        name: 'nplToken',
                        in: 'header',
                        required: false,
                        schema: {
                            type: 'string',
                            default: 'dev'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'OK',
                        content: {
                            '*/*': {
                                schema: {
                                    $ref: '#/components/schemas/CheckInfoResp'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            CustGuarantorTelephoneUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    telType: {
                        type: 'string'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    },
                    otherTel: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorTelephoneUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorTelephoneUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorTelephoneUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorTelephoneListTOData: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorTelephoneListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorTelephoneListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorTelephoneListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    telType: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    otherTel: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorTelephoneListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorTelephoneListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorTelephoneListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorTelephoneFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorTelephoneFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorTelephoneFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorTelephone: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    telType: {
                        type: 'string'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherTel: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorTelephoneFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorTelephone'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorTelephone'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoUpdateData: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    guarantorType: {
                        type: 'string'
                    },
                    titleNameTh: {
                        type: 'string'
                    },
                    firstNameTh: {
                        type: 'string'
                    },
                    lastNameTh: {
                        type: 'string'
                    },
                    titleNameEn: {
                        type: 'string'
                    },
                    firstNameEn: {
                        type: 'string'
                    },
                    lastNameEn: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string'
                    },
                    race: {
                        type: 'string'
                    },
                    nationality: {
                        type: 'string'
                    },
                    religion: {
                        type: 'string'
                    },
                    juristicType: {
                        type: 'string'
                    },
                    juristicTypeOther: {
                        type: 'string'
                    },
                    businessType: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    deceasedStatus: {
                        type: 'string'
                    },
                    juristicOperationStatus: {
                        type: 'string'
                    },
                    referenceNo: {
                        type: 'string'
                    },
                    creditLimit: {
                        type: 'number',
                        format: 'double'
                    },
                    suretyContractDt: {
                        type: 'string'
                    },
                    suretyReleaseStatus: {
                        type: 'string'
                    },
                    suretyReleaseDt: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoUpdateRes: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoListTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoListTO: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorTypeId: {
                        type: 'string'
                    },
                    guarantorType: {
                        type: 'string'
                    },
                    titleNameId: {
                        type: 'string'
                    },
                    titleName: {
                        type: 'string'
                    },
                    firstNameTh: {
                        type: 'string'
                    },
                    lastNameTh: {
                        type: 'string'
                    },
                    guarantorName: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string'
                    },
                    age: {
                        type: 'integer',
                        format: 'int32'
                    },
                    genderId: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    },
                    raceId: {
                        type: 'string'
                    },
                    race: {
                        type: 'string'
                    },
                    nationalityId: {
                        type: 'string'
                    },
                    nationality: {
                        type: 'string'
                    },
                    religionId: {
                        type: 'string'
                    },
                    religion: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    deceasedStatus: {
                        type: 'string'
                    },
                    deceasedStatusDesc: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    },
                    referenceNo: {
                        type: 'string'
                    },
                    creditLimit: {
                        type: 'number',
                        format: 'double'
                    },
                    suretyContractDt: {
                        type: 'string'
                    },
                    suretyReleaseStatus: {
                        type: 'string'
                    },
                    suretyReleaseStatusDesc: {
                        type: 'string'
                    },
                    suretyReleaseDt: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorInfoListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoFindTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoFindTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoFindTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoFindTO: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorTypeId: {
                        type: 'string'
                    },
                    guarantorType: {
                        type: 'string'
                    },
                    guarantorName: {
                        type: 'string'
                    },
                    referenceNo: {
                        type: 'string'
                    },
                    creditLimit: {
                        type: 'number',
                        format: 'double'
                    },
                    suretyContractDt: {
                        type: 'string'
                    },
                    suretyReleaseStatus: {
                        type: 'string'
                    },
                    suretyReleaseStatusDesc: {
                        type: 'string'
                    },
                    suretyReleaseDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorInfoFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoFindData: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfo: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    guarantorType: {
                        type: 'string'
                    },
                    titleNameTh: {
                        type: 'string'
                    },
                    firstNameTh: {
                        type: 'string'
                    },
                    lastNameTh: {
                        type: 'string'
                    },
                    titleNameEn: {
                        type: 'string'
                    },
                    firstNameEn: {
                        type: 'string'
                    },
                    lastNameEn: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string',
                        format: 'date-time'
                    },
                    race: {
                        type: 'string'
                    },
                    nationality: {
                        type: 'string'
                    },
                    religion: {
                        type: 'string'
                    },
                    juristicType: {
                        type: 'string'
                    },
                    juristicTypeOther: {
                        type: 'string'
                    },
                    businessType: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    deceasedStatus: {
                        type: 'string'
                    },
                    juristicOperationStatus: {
                        type: 'string'
                    },
                    referenceNo: {
                        type: 'string'
                    },
                    creditLimit: {
                        type: 'number',
                        format: 'double'
                    },
                    suretyContractDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    suretyReleaseStatus: {
                        type: 'string'
                    },
                    suretyReleaseDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustGuarantorInfoFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorInfo'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfo'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoDebtorInformationData: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorInfoDebtorInformationReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoDebtorInformationData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoDebtorInformation: {
                type: 'object',
                properties: {
                    guarantorTypeId: {
                        type: 'string'
                    },
                    guarantorTypeDesc: {
                        type: 'string'
                    },
                    juristicTypeId: {
                        type: 'string'
                    },
                    juristicTypeName: {
                        type: 'string'
                    },
                    juristicTypeOther: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    juristicStatusId: {
                        type: 'string'
                    },
                    juristicStatusDesc: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorInfoDebtorInformationRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorInfoDebtorInformation'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorInfoDebtorInformation'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorDeceaseAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorDeceaseAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorDeceaseAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorDeceaseAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorDeceaseAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorDeceaseAttachListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorDeceaseAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorDeceaseAttachListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    urlGuarantorDeceaseFile: {
                        type: 'string'
                    },
                    urlGuarantorDeceaseFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorDeceaseAttachListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorDeceaseAttachListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorDeceaseAttachListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorDeceaseAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorDeceaseAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorDeceaseAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlGuarantorDeceaseFile: {
                        type: 'string'
                    },
                    urlGuarantorDeceaseFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorDeceaseAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorDeceaseAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorDeceaseAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonUpdateData: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonUpdateRes: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonListTOData: {
                type: 'object',
                properties: {
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonListTO: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    seqIdPersonCard: {
                        type: 'integer',
                        format: 'int32'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    urlGuarantorContactPersonCardFile: {
                        type: 'string'
                    },
                    urlGuarantorContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorContactPersonListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonFindTOData: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonFindTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonFindTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonFindTO: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateOfExpiry: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    urlContactPersonCardFile: {
                        type: 'string'
                    },
                    urlContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorContactPersonFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonFindData: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPerson: {
                type: 'object',
                properties: {
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustGuarantorContactPersonFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorContactPerson'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPerson'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonCardAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonCardAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonCardAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonCardAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonCardAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorContactPersonCardAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonCardAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonCardAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorContactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateOfExpiry: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlGuarantorContactPersonCardFile: {
                        type: 'string'
                    },
                    urlGuarantorContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorContactPersonCardAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorContactPersonCardAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorContactPersonCardAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerClosedownAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorClosedownAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerClosedownAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorClosedownAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorClosedownAttachListTOData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorClosedownAttachListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorClosedownAttachListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorClosedownAttachListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    urlGuarantorClosedownFile: {
                        type: 'string'
                    },
                    urlGuarantorClosedownFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorClosedownAttachListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorClosedownAttachListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorClosedownAttachListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorClosedownAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorClosedownAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorClosedownAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorClosedownAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlGuarantorClosedownFile: {
                        type: 'string'
                    },
                    urlGuarantorClosedownFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorClosedownAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorClosedownAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorClosedownAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorCardAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorCardAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorCardAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorCardAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorCardAttachListTOData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorCardAttachListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorCardAttachListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorCardAttachListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    urlGuarantorCardFile: {
                        type: 'string'
                    },
                    urlGuarantorCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorCardAttachListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorCardAttachListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorCardAttachListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorCardAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorCardAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorCardAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorCardAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateOfExpiry: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isdelete: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlGuarantorCardFile: {
                        type: 'string'
                    },
                    urlGuarantorCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorCardAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorCardAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorCardAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorAddressUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    addressType: {
                        type: 'string'
                    },
                    otherAddress: {
                        type: 'string'
                    },
                    addressDesc: {
                        type: 'string'
                    },
                    provinceCode: {
                        type: 'string'
                    },
                    districtCode: {
                        type: 'string'
                    },
                    subdistrictCode: {
                        type: 'string'
                    },
                    postalCode: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    province: {
                        type: 'string'
                    },
                    district: {
                        type: 'string'
                    },
                    subdistrict: {
                        type: 'string'
                    },
                    partyId: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorAddressUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorAddressUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorAddressUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorAddressListTOData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorAddressListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorAddressListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorAddressListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    addressType: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    address: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorAddressListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorAddressListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorAddressListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorAddressFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustGuarantorAddressFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustGuarantorAddressFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustGuarantorAddress: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    guarantorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    addressType: {
                        type: 'string'
                    },
                    otherAddress: {
                        type: 'string'
                    },
                    addressDesc: {
                        type: 'string'
                    },
                    provinceCode: {
                        type: 'string'
                    },
                    districtCode: {
                        type: 'string'
                    },
                    subdistrictCode: {
                        type: 'string'
                    },
                    postalCode: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    province: {
                        type: 'string'
                    },
                    district: {
                        type: 'string'
                    },
                    subdistrict: {
                        type: 'string'
                    },
                    partyId: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustGuarantorAddressFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustGuarantorAddress'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustGuarantorAddress'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustExecutorInfoUpdateData: {
                type: 'object',
                properties: {
                    executorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    relationshipType: {
                        type: 'string'
                    },
                    relationshipNo: {
                        type: 'string'
                    },
                    otherType: {
                        type: 'string'
                    },
                    executorName: {
                        type: 'string'
                    },
                    executorTel: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustExecutorInfoUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustExecutorInfoUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustExecutorInfoUpdateRes: {
                type: 'object',
                properties: {
                    executorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustExecutorInfoListTOData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustExecutorInfoListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustExecutorInfoListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustExecutorInfoListTO: {
                type: 'object',
                properties: {
                    executorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    relationshipType: {
                        type: 'string'
                    },
                    relationshipTypeDesc: {
                        type: 'string'
                    },
                    relationshipNo: {
                        type: 'string'
                    },
                    executorName: {
                        type: 'string'
                    },
                    executorTel: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    }
                }
            },
            CustExecutorInfoListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustExecutorInfoListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustExecutorInfoListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustExecutorInfoFindData: {
                type: 'object',
                properties: {
                    executorId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustExecutorInfoFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustExecutorInfoFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustExecutorInfo: {
                type: 'object',
                properties: {
                    executorId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    relationshipType: {
                        type: 'string'
                    },
                    relationshipNo: {
                        type: 'string'
                    },
                    otherType: {
                        type: 'string'
                    },
                    executorName: {
                        type: 'string'
                    },
                    executorTel: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustExecutorInfoFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustExecutorInfo'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustExecutorInfo'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerTelephoneUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    partyId: {
                        type: 'string'
                    },
                    telType: {
                        type: 'string'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    },
                    otherType: {
                        type: 'string'
                    }
                }
            },
            CustCustomerTelephoneUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerTelephoneUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerTelephoneUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerTelephoneListTOData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerTelephoneListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerTelephoneListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerTelephoneListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    telType: {
                        type: 'string'
                    },
                    telTypeDesc: {
                        type: 'string'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    otherType: {
                        type: 'string'
                    }
                }
            },
            CustCustomerTelephoneListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerTelephoneListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerTelephoneListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerTelephoneFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerTelephoneFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerTelephoneFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerTelephone: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    partyId: {
                        type: 'string'
                    },
                    telType: {
                        type: 'string'
                    },
                    otherType: {
                        type: 'string'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustCustomerTelephoneFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerTelephone'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerTelephone'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoUpdateData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerType: {
                        type: 'string'
                    },
                    cifNo: {
                        type: 'string'
                    },
                    titleName: {
                        type: 'string'
                    },
                    firstName: {
                        type: 'string'
                    },
                    middleName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string'
                    },
                    race: {
                        type: 'string'
                    },
                    nationality: {
                        type: 'string'
                    },
                    religion: {
                        type: 'string'
                    },
                    juristicType: {
                        type: 'string'
                    },
                    juristicTypeOther: {
                        type: 'string'
                    },
                    businessType: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    deceasedStatus: {
                        type: 'string'
                    },
                    juristicOperationStatus: {
                        type: 'string'
                    },
                    partyId: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoUpdateRes: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoRelatedPersonTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    },
                    accountNo: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    firstNameTh: {
                        type: 'string'
                    },
                    lastNameTh: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    collateralType: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoRelatedPersonTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoRelatedPersonTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'string'
                    },
                    customerName: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardTypeCodeDesc: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoRelatedPersonTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoRelatedPersonTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoOwnTO: {
                type: 'object',
                properties: {
                    buyer: {
                        type: 'string'
                    },
                    collateralType: {
                        type: 'string'
                    },
                    mortgageAmount: {
                        type: 'number',
                        format: 'double'
                    },
                    accountNo: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoOwnTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoOwnTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoOwnTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCutomerInfoListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCutomerInfoListTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portCode: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoListTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'integer',
                        format: 'int32'
                    },
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    portCode: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoGuarantorPersonTO: {
                type: 'object',
                properties: {
                    guarantorName: {
                        type: 'string'
                    },
                    accountNo: {
                        type: 'string'
                    },
                    lnAccountName: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoGuarantorPersonTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoGuarantorPersonTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoGuarantorPersonTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoFindTOData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoFindTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoFindTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoFindTO: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerType: {
                        type: 'string'
                    },
                    customerTypeDesc: {
                        type: 'string'
                    },
                    titleName: {
                        type: 'string'
                    },
                    titleNameDesc: {
                        type: 'string'
                    },
                    firstName: {
                        type: 'string'
                    },
                    middleName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string'
                    },
                    age: {
                        type: 'integer',
                        format: 'int32'
                    },
                    gender: {
                        type: 'string'
                    },
                    genderDesc: {
                        type: 'string'
                    },
                    race: {
                        type: 'string'
                    },
                    raceDesc: {
                        type: 'string'
                    },
                    nationality: {
                        type: 'string'
                    },
                    nationalityDesc: {
                        type: 'string'
                    },
                    religion: {
                        type: 'string'
                    },
                    religionDesc: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    deceasedStatus: {
                        type: 'string'
                    },
                    deceasedStatusDesc: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    cifNo: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoFindData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfo: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerType: {
                        type: 'string'
                    },
                    cifNo: {
                        type: 'string'
                    },
                    titleName: {
                        type: 'string'
                    },
                    firstName: {
                        type: 'string'
                    },
                    middleName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    gender: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string',
                        format: 'date-time'
                    },
                    race: {
                        type: 'string'
                    },
                    nationality: {
                        type: 'string'
                    },
                    religion: {
                        type: 'string'
                    },
                    juristicType: {
                        type: 'string'
                    },
                    juristicTypeOther: {
                        type: 'string'
                    },
                    businessType: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    deceasedStatus: {
                        type: 'string'
                    },
                    juristicOperationStatus: {
                        type: 'string'
                    },
                    partyId: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustCustomerInfoFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfo'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfo'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoDebtorPersonTO: {
                type: 'object',
                properties: {
                    accountNo: {
                        type: 'string'
                    },
                    lnAccountName: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoDebtorPersonTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoDebtorPersonTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoDebtorPersonTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoDebtorInformation: {
                type: 'object',
                properties: {
                    customerTypeId: {
                        type: 'string'
                    },
                    customerType: {
                        type: 'string'
                    },
                    juristicTypeId: {
                        type: 'string'
                    },
                    juristicTypeName: {
                        type: 'string'
                    },
                    juristicTypeOther: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    lineId: {
                        type: 'string'
                    },
                    facebook: {
                        type: 'string'
                    },
                    juristicStatusId: {
                        type: 'string'
                    },
                    juristicStatusDesc: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoDebtorInformationRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoDebtorInformation'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoDebtorInformation'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoCustomerData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoCustomerReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoCustomerData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCustomer: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerType: {
                        type: 'string'
                    },
                    customerTypeDesc: {
                        type: 'string'
                    },
                    customerName: {
                        type: 'string'
                    },
                    cifNo: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCustomerRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoCustomer'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoCustomer'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoCustDetailListTOData: {
                type: 'object',
                properties: {
                    cifNo: {
                        type: 'string'
                    },
                    firstName: {
                        type: 'string'
                    },
                    middleName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    customerType: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    marketCode: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCustDetailListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoCustDetailListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCustDetailListTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cifNo: {
                        type: 'string'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerType: {
                        type: 'string'
                    },
                    customerTypeDesc: {
                        type: 'string'
                    },
                    customerName: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCustDetailListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoCustDetailListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoCustDetailListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoCifNoListTOData: {
                type: 'object',
                properties: {
                    cifNo: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCifNoListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoCifNoListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCifNoListTO: {
                type: 'object',
                properties: {
                    cifNo: {
                        type: 'string'
                    },
                    customerName: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoCifNoListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoCifNoListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoCifNoListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoBorrowerGroupCode: {
                type: 'object',
                properties: {
                    borrowerGroupCode: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoBorrowerGroupCodeRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoBorrowerGroupCode'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoBorrowerGroupCode'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoBorrowerCodeOld: {
                type: 'object',
                properties: {
                    borrowerCodeOld: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoBorrowerCodeOldRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoBorrowerCodeOld'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoBorrowerCodeOld'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerInfoBorrowerCode: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    }
                }
            },
            CustCustomerInfoBorrowerCodeRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerInfoBorrowerCode'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerInfoBorrowerCode'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerDeceaseAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustCustomerDeceaseAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerDeceaseAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerDeceaseAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerDeceaseAttachListTOData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerDeceaseAttachListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerDeceaseAttachListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerDeceaseAttachListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    urlCustomerDeceaseFile: {
                        type: 'string'
                    },
                    urlCustomerDeceaseFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustCustomerDeceaseAttachListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerDeceaseAttachListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerDeceaseAttachListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerDeceaseAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerDeceaseAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerDeceaseAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerDeceaseAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlCustomerDeceaseFile: {
                        type: 'string'
                    },
                    urlCustomerDeceaseFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustCustomerDeceaseAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerDeceaseAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerDeceaseAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerClosedownAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerClosedownAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerClosedownAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerClosedownAttachListTOData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerClosedownAttachListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerClosedownAttachListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerClosedownAttachListTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'integer',
                        format: 'int32'
                    },
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    urlCustomerClosedownFile: {
                        type: 'string'
                    },
                    urlCustomerClosedownFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustCustomerClosedownAttachListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerClosedownAttachListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerClosedownAttachListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerClosedownAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerClosedownAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerClosedownAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerClosedownAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlCustomerClosedownFile: {
                        type: 'string'
                    },
                    urlCustomerClosedownFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustCustomerClosedownAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerClosedownAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerClosedownAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerCardAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustCustomerCardAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerCardAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerCardAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerCardAttachIdcardFindTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardTypeCodeDesc: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    urlCustomerCardFile: {
                        type: 'string'
                    },
                    urlCustomerCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustCustomerCardAttachIdcardFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerCardAttachIdcardFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerCardAttachIdcardFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerCardAttachFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerCardAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerCardAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerCardAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateOfExpiry: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlCustomerCardFile: {
                        type: 'string'
                    },
                    urlCustomerCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustCustomerCardAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerCardAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerCardAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAddressUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    addressType: {
                        type: 'string'
                    },
                    otherAddress: {
                        type: 'string'
                    },
                    addressDesc: {
                        type: 'string'
                    },
                    provinceCode: {
                        type: 'string'
                    },
                    districtCode: {
                        type: 'string'
                    },
                    subdistrictCode: {
                        type: 'string'
                    },
                    postalCode: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    mailingFlag: {
                        type: 'string'
                    },
                    province: {
                        type: 'string'
                    },
                    district: {
                        type: 'string'
                    },
                    subdistrict: {
                        type: 'string'
                    },
                    partyId: {
                        type: 'string'
                    },
                    accommodationStatus: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAddressUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerAddressUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAddressUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAddressListTOData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAddressListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerAddressListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAddressListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    description: {
                        type: 'string'
                    },
                    address: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    mailingFlag: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAddressListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerAddressListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerAddressListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAddressFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAddressFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerAddressFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAddress: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    addressType: {
                        type: 'string'
                    },
                    otherAddress: {
                        type: 'string'
                    },
                    addressDesc: {
                        type: 'string'
                    },
                    provinceCode: {
                        type: 'string'
                    },
                    districtCode: {
                        type: 'string'
                    },
                    subdistrictCode: {
                        type: 'string'
                    },
                    postalCode: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    mailingFlag: {
                        type: 'string'
                    },
                    province: {
                        type: 'string'
                    },
                    district: {
                        type: 'string'
                    },
                    subdistrict: {
                        type: 'string'
                    },
                    partyId: {
                        type: 'string'
                    },
                    accommodationStatus: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustCustomerAddressFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerAddress'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerAddress'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAccountUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    accountCode: {
                        type: 'string'
                    },
                    accountRole: {
                        type: 'integer',
                        format: 'int32'
                    },
                    telNo: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    isactive: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAccountUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerAccountUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAccountUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAccountFindData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCustomerAccountFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCustomerAccountFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCustomerAccount: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    accountCode: {
                        type: 'string'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    accountRole: {
                        type: 'integer',
                        format: 'int32'
                    },
                    remark: {
                        type: 'string'
                    },
                    isactive: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustCustomerAccountFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCustomerAccount'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCustomerAccount'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonUpdateData: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustContactPersonUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonUpdateRes: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonListTOData: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustContactPersonListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonListTO: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardTypeCodeDesc: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    urlContactPersonCardFile: {
                        type: 'string'
                    },
                    urlContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustContactPersonListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustContactPersonListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonFindTO: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateOfExpiry: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    urlContactPersonCardFile: {
                        type: 'string'
                    },
                    urlContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustContactPersonFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustContactPersonFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonFindData: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustContactPersonFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustContactPerson: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactName: {
                        type: 'string'
                    },
                    telNo1: {
                        type: 'string'
                    },
                    telNo2: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustContactPersonFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustContactPerson'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustContactPerson'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonCardAttachUpdateData: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonCardAttachUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustContactPersonCardAttachUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonCardAttachUpdateRes: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonCardAttachListTOData: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonCardAttachListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustContactPersonCardAttachListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonCardAttachListTO: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string'
                    },
                    dateOfExpiry: {
                        type: 'string'
                    },
                    urlContactPersonCardFile: {
                        type: 'string'
                    },
                    urlContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonCardAttachListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustContactPersonCardAttachListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustContactPersonCardAttachListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonCardAttachFindData: {
                type: 'object',
                properties: {
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustContactPersonCardAttachFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustContactPersonCardAttachFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonCardAttach: {
                type: 'object',
                properties: {
                    seqId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    contactPersonId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    placeOfIssue: {
                        type: 'string'
                    },
                    dateOfIssue: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateOfExpiry: {
                        type: 'string',
                        format: 'date-time'
                    },
                    otherCard: {
                        type: 'string'
                    },
                    attachFileDetail: {
                        type: 'string'
                    },
                    attachFileExt: {
                        type: 'string'
                    },
                    attachFileOriginalName: {
                        type: 'string'
                    },
                    attachFileName: {
                        type: 'string'
                    },
                    isDeleted: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    urlContactPersonCardFile: {
                        type: 'string'
                    },
                    urlContactPersonCardFileThumbnail: {
                        type: 'string'
                    }
                }
            },
            CustContactPersonCardAttachFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustContactPersonCardAttach'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustContactPersonCardAttach'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandUpdateData: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    landType: {
                        type: 'string'
                    },
                    otherLandType: {
                        type: 'string'
                    },
                    collateralSource: {
                        type: 'string'
                    },
                    landMainStatus: {
                        type: 'string'
                    },
                    landMainDesc: {
                        type: 'string'
                    },
                    titleDocumentType: {
                        type: 'string'
                    },
                    otherTitleDocument: {
                        type: 'string'
                    },
                    titleDocumentNo: {
                        type: 'string'
                    },
                    projectName: {
                        type: 'string'
                    },
                    locationDesc: {
                        type: 'string'
                    },
                    provinceCode: {
                        type: 'string'
                    },
                    districtCode: {
                        type: 'string'
                    },
                    subdistrictCode: {
                        type: 'string'
                    },
                    rai: {
                        type: 'integer',
                        format: 'int32'
                    },
                    ngan: {
                        type: 'integer',
                        format: 'int32'
                    },
                    wa: {
                        type: 'number',
                        format: 'double'
                    },
                    areaUsage: {
                        type: 'number',
                        format: 'double'
                    },
                    totalAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    landOwner: {
                        type: 'string'
                    },
                    landAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    buildingAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    appraisalPresentDt: {
                        type: 'string'
                    },
                    appraisalNextDt: {
                        type: 'string'
                    },
                    appraiser: {
                        type: 'string'
                    },
                    collateralDesc: {
                        type: 'string'
                    },
                    forceSalePrice: {
                        type: 'number',
                        format: 'double'
                    },
                    govAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    officerAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    auctionPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    woodAuctionPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    mortgageType: {
                        type: 'string'
                    },
                    mortgageNo: {
                        type: 'string'
                    },
                    mortgageDt: {
                        type: 'string'
                    },
                    mortgageAmount: {
                        type: 'number',
                        format: 'double'
                    },
                    mortgageAssignmentDt: {
                        type: 'string'
                    },
                    mortgageAssignmentStatus: {
                        type: 'string'
                    },
                    redeemDt: {
                        type: 'string'
                    },
                    lastCollateralStatus: {
                        type: 'string'
                    },
                    redeemStatus: {
                        type: 'string'
                    },
                    joinCollateral: {
                        type: 'string'
                    },
                    joinCreditor: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    provinceDesc: {
                        type: 'string'
                    },
                    districtDesc: {
                        type: 'string'
                    },
                    subdistrictDesc: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    },
                    landNo: {
                        type: 'string'
                    },
                    surveyNo: {
                        type: 'string'
                    },
                    landOfficeCode: {
                        type: 'string'
                    },
                    landOfficeDesc: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCollateralLandUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandUpdateRes: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandListTOData: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCollateralLandListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandListTO: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    titleDocumentNo: {
                        type: 'string'
                    },
                    landNo: {
                        type: 'string'
                    },
                    subdistrictDescription: {
                        type: 'string'
                    },
                    districtDescription: {
                        type: 'string'
                    },
                    provinceDescription: {
                        type: 'string'
                    },
                    mortgageAmount: {
                        type: 'number',
                        format: 'double'
                    },
                    landOwner: {
                        type: 'string'
                    },
                    auctionId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCollateralLandListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCollateralLandListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandInformationData: {
                type: 'object',
                properties: {
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    cifNo: {
                        type: 'string'
                    },
                    firstName: {
                        type: 'string'
                    },
                    middleName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    customerType: {
                        type: 'string'
                    },
                    cardTypeCode: {
                        type: 'string'
                    },
                    cardNo: {
                        type: 'string'
                    },
                    marketCode: {
                        type: 'string'
                    },
                    companyName: {
                        type: 'string'
                    },
                    taxId: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandInformationReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCollateralLandInformationData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandInformation: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    titleDocumentType: {
                        type: 'string'
                    },
                    titleDocumentNo: {
                        type: 'string'
                    },
                    landNo: {
                        type: 'string'
                    },
                    subdistrictName: {
                        type: 'string'
                    },
                    districtName: {
                        type: 'string'
                    },
                    provinceName: {
                        type: 'string'
                    },
                    landOwner: {
                        type: 'string'
                    },
                    contractNo: {
                        type: 'string'
                    },
                    mortgageAmount: {
                        type: 'number',
                        format: 'double'
                    },
                    contractId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    deptId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    collateralType: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandInformationRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCollateralLandInformation'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCollateralLandInformation'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandFindData: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustCollateralLandFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustCollateralLandFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLand: {
                type: 'object',
                properties: {
                    clLandId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    landType: {
                        type: 'string'
                    },
                    otherLandType: {
                        type: 'string'
                    },
                    collateralSource: {
                        type: 'string'
                    },
                    landMainStatus: {
                        type: 'string'
                    },
                    landMainDesc: {
                        type: 'string'
                    },
                    titleDocumentType: {
                        type: 'string'
                    },
                    otherTitleDocument: {
                        type: 'string'
                    },
                    titleDocumentNo: {
                        type: 'string'
                    },
                    projectName: {
                        type: 'string'
                    },
                    locationDesc: {
                        type: 'string'
                    },
                    provinceCode: {
                        type: 'string'
                    },
                    districtCode: {
                        type: 'string'
                    },
                    subdistrictCode: {
                        type: 'string'
                    },
                    rai: {
                        type: 'integer',
                        format: 'int32'
                    },
                    ngan: {
                        type: 'integer',
                        format: 'int32'
                    },
                    wa: {
                        type: 'number',
                        format: 'double'
                    },
                    areaUsage: {
                        type: 'number',
                        format: 'double'
                    },
                    totalAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    landOwner: {
                        type: 'string'
                    },
                    landAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    buildingAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    appraisalPresentDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    appraisalNextDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    appraiser: {
                        type: 'string'
                    },
                    collateralDesc: {
                        type: 'string'
                    },
                    forceSalePrice: {
                        type: 'number',
                        format: 'double'
                    },
                    govAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    officerAppraisalPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    auctionPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    woodAuctionPrice: {
                        type: 'number',
                        format: 'double'
                    },
                    mortgageType: {
                        type: 'string'
                    },
                    mortgageNo: {
                        type: 'string'
                    },
                    mortgageDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    mortgageAmount: {
                        type: 'number',
                        format: 'double'
                    },
                    mortgageAssignmentDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    mortgageAssignmentStatus: {
                        type: 'string'
                    },
                    redeemDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    lastCollateralStatus: {
                        type: 'string'
                    },
                    redeemStatus: {
                        type: 'string'
                    },
                    joinCollateral: {
                        type: 'string'
                    },
                    joinCreditor: {
                        type: 'string'
                    },
                    remark: {
                        type: 'string'
                    },
                    provinceDesc: {
                        type: 'string'
                    },
                    districtDesc: {
                        type: 'string'
                    },
                    subdistrictDesc: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    landNo: {
                        type: 'string'
                    },
                    surveyNo: {
                        type: 'string'
                    },
                    landOfficeCode: {
                        type: 'string'
                    },
                    landOfficeDesc: {
                        type: 'string'
                    }
                }
            },
            CustCollateralLandFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustCollateralLand'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustCollateralLand'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerMappingUpdateData: {
                type: 'object',
                properties: {
                    mappingId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    accountPartyRole: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerMappingUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerMappingUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerMappingUpdateRes: {
                type: 'object',
                properties: {
                    mappingId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerMappingFindData: {
                type: 'object',
                properties: {
                    mappingId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerMappingFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerMappingFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerMapping: {
                type: 'object',
                properties: {
                    mappingId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    accountPartyRole: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustBorrowerMappingFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerMapping'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerMapping'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoUpdateData: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoUpdateRes: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoListTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    portCode: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoListTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portCode: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoFindTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoFindTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoFindTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoCustomerFindTO: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portCode: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoCustomerFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoCustomerFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoFindData: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfo: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustBorrowerInfoFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfo'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfo'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoCustomerListTOData: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoCustomerListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoCustomerListTOData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoCustomerListTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    customerName: {
                        type: 'string'
                    },
                    accountNo: {
                        type: 'string'
                    },
                    accountPartyRole: {
                        type: 'string'
                    },
                    accountPartyRoleDesc: {
                        type: 'string'
                    },
                    customerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoCustomerListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoCustomerListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoCustomerListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoBorrowerGroupCode: {
                type: 'object',
                properties: {
                    borrowerGroupCode: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoBorrowerGroupCodeRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoBorrowerGroupCode'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoBorrowerGroupCode'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoBorrowerFindTO: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    borrowerCode: {
                        type: 'string'
                    },
                    borrowerName: {
                        type: 'string'
                    },
                    borrowerCodeOld: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    statusDesc: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoBorrowerFindTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoBorrowerFindTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoBorrowerFindTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoBorrowerCodeOld: {
                type: 'object',
                properties: {
                    borrowerCodeOld: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoBorrowerCodeOldRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoBorrowerCodeOld'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoBorrowerCodeOld'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerInfoBorrowerCode: {
                type: 'object',
                properties: {
                    borrowerCode: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerInfoBorrowerCodeRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerInfoBorrowerCode'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerInfoBorrowerCode'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerGroupUpdateData: {
                type: 'object',
                properties: {
                    borrowerGroupId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerGroupUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerGroupUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerGroupUpdateRes: {
                type: 'object',
                properties: {
                    borrowerGroupId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerGroupFindData: {
                type: 'object',
                properties: {
                    borrowerGroupId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerGroupFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerGroupFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerGroup: {
                type: 'object',
                properties: {
                    borrowerGroupId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerGroupCode: {
                        type: 'string'
                    },
                    borrowerGroupName: {
                        type: 'string'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustBorrowerGroupFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerGroup'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerGroup'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerDetailUpdateData: {
                type: 'object',
                properties: {
                    borrowerDetailId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    debtorType: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerDetailUpdateReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerDetailUpdateData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerDetailUpdateRes: {
                type: 'object',
                properties: {
                    borrowerDetailId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerDetailListTOReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerDetailListToData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerDetailListToData: {
                type: 'object',
                properties: {
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerDetailListTO: {
                type: 'object',
                properties: {
                    seq: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portName: {
                        type: 'string'
                    },
                    cutOffDate: {
                        type: 'string',
                        format: 'date-time'
                    },
                    transferDate: {
                        type: 'string',
                        format: 'date-time'
                    },
                    dateLastCal: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustBorrowerDetailListTORes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerDetailListTO'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerDetailListTO'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerDetailFindData: {
                type: 'object',
                properties: {
                    borrowerDetailId: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            CustBorrowerDetailFindReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/CustBorrowerDetailFindData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            CustBorrowerDetail: {
                type: 'object',
                properties: {
                    borrowerDetailId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    borrowerId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    portId: {
                        type: 'integer',
                        format: 'int32'
                    },
                    debtorType: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    },
                    createBy: {
                        type: 'string'
                    },
                    createDt: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updateBy: {
                        type: 'string'
                    },
                    updateDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CustBorrowerDetailFindRes: {
                type: 'object',
                properties: {
                    dataList: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/CustBorrowerDetail'
                        }
                    },
                    data: {
                        $ref: '#/components/schemas/CustBorrowerDetail'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            UploadFileRes: {
                type: 'object',
                properties: {
                    filename: {
                        type: 'string'
                    },
                    filePath: {
                        type: 'string'
                    },
                    fileUrl: {
                        type: 'string'
                    },
                    filenameThumbnail: {
                        type: 'string'
                    },
                    filePathThumbnail: {
                        type: 'string'
                    },
                    fileUrlThumbnail: {
                        type: 'string'
                    },
                    errorcode: {
                        type: 'integer',
                        format: 'int32'
                    },
                    errormessage: {
                        type: 'string'
                    },
                    totalCount: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            },
            UploadFileData: {
                type: 'object',
                properties: {
                    fileType: {
                        type: 'string'
                    },
                    fileBase64: {
                        type: 'string'
                    },
                    isTempFile: {
                        type: 'boolean'
                    }
                }
            },
            UploadFileReq: {
                type: 'object',
                properties: {
                    data: {
                        $ref: '#/components/schemas/UploadFileData'
                    },
                    userInfo: {
                        type: 'string'
                    },
                    mode: {
                        type: 'string'
                    },
                    menuCode: {
                        type: 'string'
                    },
                    lang: {
                        type: 'string'
                    }
                }
            },
            AppCommonInfoResp: {
                type: 'object',
                properties: {
                    serverId: {
                        type: 'string'
                    },
                    restUuid: {
                        type: 'string'
                    },
                    infoDesc: {
                        type: 'string'
                    },
                    infoLastBuild: {
                        type: 'string'
                    },
                    infoVersion: {
                        type: 'string'
                    },
                    infoCurrentDt: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            },
            CheckInfoResp: {
                type: 'object',
                properties: {
                    serverId: {
                        type: 'string'
                    },
                    serverDateTime: {
                        type: 'string'
                    },
                    serverContextPath: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
