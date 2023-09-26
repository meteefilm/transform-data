export const data = {
    swagger: '2.0',
    info: { description: 'Last Build : 2023-09-25 14:18:09', version: '1.0.0', title: 'BAAC Service REST API', license: { name: 'By : Sense Info Tech' } },
    host: 'sitdev.dyndns.org:9148',
    tags: [
        { name: 'App Auth Service', description: 'Auth Controller' },
        { name: 'App Common Service', description: ' ' },
        { name: 'App Core Store Service', description: 'Core Store Controller' },
        { name: 'App Ct Service', description: 'Ct Controller' },
        { name: 'App Login Service', description: 'Login Controller' },
        { name: 'Token Service', description: 'Token Rest Controller' }
    ],
    paths: {
        '/BAACCoreService/public/token/auth_iauthen': {
            post: {
                tags: ['Token Service'],
                summary: 'AUTH_IAUTHEN',
                operationId: 'authIauthenUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthIAuthenReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthIAuthenRes' } } }
            }
        },
        '/BAACCoreService/public/token/core_config_list': {
            post: {
                tags: ['Token Service'],
                summary: 'CORE_CONFIG_LIST',
                operationId: 'coreConfigListUsingPOST_1',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CoreConfigListReq' } }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CoreConfigListRes' } } }
            }
        },
        '/BAACCoreService/public/token/ct_language_list': {
            post: {
                tags: ['Token Service'],
                summary: 'CT_LANGUAGE_LIST',
                operationId: 'ctLanguageListUsingPOST_1',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLanguageReq' } }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLanguageRes' } } }
            }
        },
        '/BAACCoreService/public/token/genToken': {
            post: {
                tags: ['Token Service'],
                summary: 'Generate Token',
                operationId: 'genTokenUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ in: 'body', name: 'jwt', description: 'jwt', required: true, schema: { $ref: '#/definitions/AuthPayloadJWTReq' } }],
                responses: { 200: { description: 'OK', schema: { type: 'object', additionalProperties: { type: 'string' } } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_department_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_DEPARTMENT_FIND',
                operationId: 'authDepartmentFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthDepartmentReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthDepartmentRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_department_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_DEPARTMENT_LIST',
                operationId: 'authDepartmentListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthDepartmentReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthDepartmentRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_department_search': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_DEPARTMENT_SEARCH',
                operationId: 'authDepartmentListUsingPOST_1',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthDepartmentSearchReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthDepartmentSearchRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_department_search_level_to': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_DEPARTMENT_SEARCH_LEVEL_TO',
                operationId: 'authDepartmentLevelTOUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthDepartmentSearchLevelTOReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthDepartmentSearchLevelTORes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_department_unit': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_DEPARTMENT_UNIT',
                operationId: 'authDepartmentUnitUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthDepartmentUnitRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_department_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_DEPARTMENT_UPDATE',
                operationId: 'authDepartmentUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthDepartmentReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthDepartmentUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_group_program_detail_delete': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_GROUP_PROGRAM_DETAIL_DELETE',
                operationId: 'authGroupProgramDetailDeleteUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthGroupProgramDetailReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthGroupProgramDetailRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_group_program_detail_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_GROUP_PROGRAM_DETAIL_LIST',
                operationId: 'authGroupProgramDetailListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthGroupProgramDetailReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthGroupProgramDetailRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_group_program_detail_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_GROUP_PROGRAM_DETAIL_UPDATE',
                operationId: 'authGroupProgramDetailUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'parcelToken', in: 'header', description: 'parcelToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthGroupProgramDetailReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthGroupProgramDetailRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_group_program_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_GROUP_PROGRAM_LIST',
                operationId: 'authGroupProgramListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthGroupProgramReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthGroupProgramRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_group_program_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_GROUP_PROGRAM_UPDATE',
                operationId: 'authGroupProgramUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'parcelToken', in: 'header', description: 'parcelToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthGroupProgramReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthGroupProgramRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_log_error_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_LOG_ERROR_LIST',
                operationId: 'authLogErrorListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthLogErrorReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthLogErrorRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_log_error_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_LOG_ERROR_UPDATE',
                operationId: 'authLogErrorUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthLogErrorReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthLogErrorRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_log_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_LOG_LIST',
                operationId: 'authLogListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthLogReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthLogRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_log_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_LOG_UPDATE',
                operationId: 'authLogUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthLogReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthLogRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_position_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_POSITION_FIND',
                operationId: 'authPositionFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthPositionReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthPositionRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_position_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_POSITION_LIST',
                operationId: 'authPositionListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthPositionRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_position_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_POSITION_UPDATE',
                operationId: 'authPositionUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthPositionReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthPositionRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_system_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_SYSTEM_FIND',
                operationId: 'authSystemFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthSystemReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthSystemRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_system_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_SYSTEM_LIST',
                operationId: 'authSystemListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthSystemReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthSystemRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_system_name_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_SYSTEM_NAME_FIND',
                operationId: 'authSystemNameFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthSystemNameReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthSystemNameRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_system_name_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_SYSTEM_NAME_LIST',
                operationId: 'authSystemNameListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthSystemNameReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthSystemNameRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_system_name_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_SYSTEM_NAME_UPDATE',
                operationId: 'authSystemUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthSystemNameReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthSystemNameRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_system_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_SYSTEM_UPDATE',
                operationId: 'authSystemUpdateUsingPOST_1',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthSystemReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthSystemRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_task_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_TASK_FIND',
                operationId: 'authTaskFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthTaskReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthTaskRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_task_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_TASK_LIST',
                operationId: 'authTaskListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthTaskReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthTaskRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_task_name_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_TASK_NAME_FIND',
                operationId: 'authTaskNameFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthTaskNameReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthTaskNameRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_task_name_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_TASK_NAME_LIST',
                operationId: 'authTaskNameListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthTaskNameRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_task_name_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_TASK_NAME_UPDATE',
                operationId: 'authTaskUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthTaskNameReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthTaskNameRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_task_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_TASK_UPDATE',
                operationId: 'authTaskUpdateUsingPOST_1',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthTaskReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthTaskRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_detail_delete': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_DETAIL_DELETE',
                operationId: 'authUserInfoDetailDeleteUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoDetailReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoDetailRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_detail_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_DETAIL_LIST',
                operationId: 'authUserInfoDetailListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoDetailReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoDetailRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_detail_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_DETAIL_UPDATE',
                operationId: 'authUserInfoDetailUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoDetailReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoDetailRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_find': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_FIND',
                operationId: 'authUserInfoFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_LIST',
                operationId: 'authUserInfoListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_search': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_SEARCH',
                operationId: 'authUserInfoListUsingPOST_1',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoSearchReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoSearchRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_task_list': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_TASK_LIST',
                operationId: 'authUserInfoTaskListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoTaskReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoTaskRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/auth_user_info_update': {
            post: {
                tags: ['App Auth Service'],
                summary: 'AUTH_USER_INFO_UPDATE',
                operationId: 'authUserInfoUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/check_last_login': {
            post: {
                tags: ['App Auth Service'],
                summary: 'CHECK_LAST_LOGIN',
                operationId: 'checkLastLoginUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CheckLastloginReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CheckLastloginRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/auth/p_find_dept_nm_ctl': {
            post: {
                tags: ['App Core Store Service'],
                summary: 'Store Procedure : P_FIND_DEPT_NM_CTL',
                operationId: 'pFindDeptNmCtlUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'param', description: 'param', required: true, schema: { $ref: '#/definitions/PFindDeptNmCtlParam' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/PFindDeptNmCtlRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/common/check_info': {
            get: {
                tags: ['App Common Service'],
                summary: 'Check Info',
                operationId: 'checkInfoUsingGET',
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CheckInfoResp' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/common/info': {
            get: {
                tags: ['App Common Service'],
                summary: 'App Common Info',
                operationId: 'infoUsingGET',
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AppCommonInfoResp' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/common/reload_config': {
            get: {
                tags: ['App Common Service'],
                summary: 'Reload Config',
                operationId: 'reloadUsingGET',
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { type: 'string' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/common/upload_file': {
            post: {
                tags: ['App Common Service'],
                summary: 'Upload File',
                operationId: 'uploadFileUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/UploadFileReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/UploadFileRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/common/upload_multipart_file': {
            post: {
                tags: ['App Common Service'],
                summary: 'Upload Multipart File',
                operationId: 'uploadMultipartFileUsingPOST',
                consumes: ['multipart/form-data'],
                produces: ['*/*'],
                parameters: [
                    { name: 'uploadFileReq', in: 'formData', required: false, type: 'string' },
                    { name: 'file', in: 'formData', required: false, type: 'file' },
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string' }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/UploadFileRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/core_config_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CORE_CONFIG_LIST',
                operationId: 'coreConfigListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CoreConfigListReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CoreConfigListRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_bank_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_BANK_FIND',
                operationId: 'ctBankFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtBankReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtBankRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_bank_list_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_BANK_LIST_TO',
                operationId: 'ctBankListToUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtBankReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtBankListToRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_bank_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_BANK_UPDATE',
                operationId: 'ctBankUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtBankUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtBankUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_court_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_COURT_FIND',
                operationId: 'ctCourtFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtCourtReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtCourtRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_court_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_COURT_LIST',
                operationId: 'ctCourtListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtCourtReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtCourtRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_court_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_COURT_UPDATE',
                operationId: 'ctCourtUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtCourtUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtCourtUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_district_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_DISTRICT_FIND',
                operationId: 'ctDistrictFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtDistrictReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtDistrictRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_district_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_DISTRICT_LIST',
                operationId: 'ctDistrictListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtDistrictReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtDistrictRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_district_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_DISTRICT_UPDATE',
                operationId: 'ctDistrictUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtDistrictReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtDistrictRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_language_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LANGUAGE_FIND',
                operationId: 'CtLanguageFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLanguageReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLanguageRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_language_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LANGUAGE_LIST',
                operationId: 'ctLanguageListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLanguageReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLanguageRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_language_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LANGUAGE_UPDATE',
                operationId: 'ctLanguageUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLanguageUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLanguageUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_law_firm_address_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LAW_FIRM_ADDRESS_FIND',
                operationId: 'ctLawFirmAddressFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLawFirmAddressFindReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLawFirmAddressFindRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_law_firm_address_list_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LAW_FIRM_ADDRESS_LIST_TO',
                operationId: 'ctLawFirmAddressListToUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLawFirmAddressListToReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLawFirmAddressListToRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_law_firm_address_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LAW_FIRM_ADDRESS_UPDATE',
                operationId: 'ctLawFirmAddressUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLawFirmAddressUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLawFirmAddressUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_law_firm_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LAW_FIRM_FIND',
                operationId: 'ctLawFirmFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLawFirmFindReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLawFirmFindRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_law_firm_list_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LAW_FIRM_LIST_TO',
                operationId: 'ctLawFirmListToUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLawFirmListToReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLawFirmListToRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_law_firm_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LAW_FIRM_UPDATE',
                operationId: 'ctLawFirmUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLawFirmUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLawFirmUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_legal_execution_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LEGAL_EXECUTION_FIND',
                operationId: 'CtLegalExecutioneFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLegalExecutionReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLegalExecutionRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_legal_execution_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LEGAL_EXECUTION_LIST',
                operationId: 'ctLegalExecutionListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLegalExecutionReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLegalExecutionRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_legal_execution_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LEGAL_EXECUTION_UPDATE',
                operationId: 'CtLegalExecutionUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLegalExecutionUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLegalExecutionUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_loan_interest_rate_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LOAN_INTEREST_RATE_FIND',
                operationId: 'ctLoanInterestRateFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLoanInterestRateFindReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLoanInterestRateFindRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_loan_interest_rate_list_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LOAN_INTEREST_RATE_LIST_TO',
                operationId: 'ctLoanInterestRateListToUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLoanInterestRateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLoanInterestRateListToRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_loan_interest_rate_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_LOAN_INTEREST_RATE_UPDATE',
                operationId: 'ctLoanInterestRateUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtLoanInterestRateUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtLoanInterestRateUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_main_type_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_MAIN_TYPE_FIND',
                operationId: 'CtMainTypeFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtMainTypeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtMainTypeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_main_type_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_MAIN_TYPE_LIST',
                operationId: 'CtMainTypeListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtMainTypeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtMainTypeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_main_type_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_MAIN_TYPE_UPDATE',
                operationId: 'CtMainTypeUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtMainTypeUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtMainTypeUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_marketcode_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_MARKETCODE_FIND',
                operationId: 'ctMarketcodeFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtMarketCodeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtMarketCodeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_marketcode_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_MARKETCODE_LIST',
                operationId: 'ctMarketcodeListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtMarketCodeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtMarketCodeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_marketcode_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_MARKETCODE_UPDATE',
                operationId: 'ctMarketcodeUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtMarketCodeUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtMarketCodeUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_original_affiliation_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_ORIGINAL_AFFILIATION_FIND',
                operationId: 'CtOriginalAffiliationFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtOriginalAffiliationReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtOriginalAffiliationRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_original_affiliation_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_ORIGINAL_AFFILIATION_LIST',
                operationId: 'ctOriginalAffiliationListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtOriginalAffiliationReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtOriginalAffiliationRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_original_affiliation_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_ORIGINAL_AFFILIATION_UPDATE',
                operationId: 'CtOriginalAffiliationUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtOriginalAffiliationUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtOriginalAffiliationUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_port_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PORT_FIND',
                operationId: 'ctPortFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtPortFindReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtPortFindRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_port_list_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PORT_LIST_TO',
                operationId: 'ctPortListToUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtPortListToReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtPortListToRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_port_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PORT_UPDATE',
                operationId: 'ctPortUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtPortUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtPortUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_port_year_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PORT_YEAR_TO',
                operationId: 'ctPortYearToUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [{ name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' }],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtPortYearToRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_province_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PROVINCE_FIND',
                operationId: 'ctProvinceFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtProvinceReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtProvinceRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_province_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PROVINCE_LIST',
                operationId: 'ctProvinceListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtProvinceReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtProvinceRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_province_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_PROVINCE_UPDATE',
                operationId: 'authUpdateDepartmentUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtProvinceReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtProvinceRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_sub_type_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_SUB_TYPE_FIND',
                operationId: 'CtSubTypeFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtSubTypeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtSubTypeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_sub_type_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_SUB_TYPE_LIST',
                operationId: 'CtSubTypeListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtSubTypeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtSubTypeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_sub_type_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_SUB_TYPE_UPDATE',
                operationId: 'CtSubTypeUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtSubTypeUpdateReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtSubTypeUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_subdistrict_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_SUBDISTRICT_FIND',
                operationId: 'ctSubDistrictFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtSubDistrictReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtSubDistrictRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_subdistrict_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_SUBDISTRICT_LIST',
                operationId: 'ctSubDistrictListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtSubDistrictReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtSubDistrictRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_subdistrict_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_SUBDISTRICT_UPDATE',
                operationId: 'ctSubDistrictUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtSubDistrictReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtSubDistrictRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_table_code_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_TABLE_CODE_FIND',
                operationId: 'ctTableCodeFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtTableCodeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtTableCodeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_table_code_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_TABLE_CODE_LIST',
                operationId: 'ctTableCodeListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtTableCodeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtTableCodeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_table_code_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_TABLE_CODE_UPDATE',
                operationId: 'ctTableCodeUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtTableCodeReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtTableCodeRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_address_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_ADDRESS_FIND',
                operationId: 'ctVendorAddressFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorAddressReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorAddressRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_address_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_ADDRESS_LIST',
                operationId: 'ctVendorAddressListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorAddressReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorAddressRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_address_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_ADDRESS_UPDATE',
                operationId: 'ctVendorAddressUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorAddressReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorAddressUpdateRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_attach_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_ATTACH_FIND',
                operationId: 'ctVendorAttachFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorAttachReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorAttachRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_attach_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_ATTACH_LIST',
                operationId: 'ctVendorAttachListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorAttachReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorAttachRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_attach_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_ATTACH_UPDATE',
                operationId: 'ctVendorAttachUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorAttachReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorAttachRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_find': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_FIND',
                operationId: 'ctVendorFindUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_list': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_LIST',
                operationId: 'ctVendorListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/ct_vendor_update': {
            post: {
                tags: ['App Ct Service'],
                summary: 'CT_VENDOR_UPDATE',
                operationId: 'ctVendorUpdateUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/CtVendorReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/CtVendorRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/ct/postcode_list_to': {
            post: {
                tags: ['App Ct Service'],
                summary: 'POSTCODE_LIST_TO',
                operationId: 'postcodeListTOUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/PostcodeTOReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/PostcodeTORes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/login/auth_group_menu_list': {
            post: {
                tags: ['App Login Service'],
                summary: 'AUTH_GROUP_MENU_LIST',
                operationId: 'authGroupMenuListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthGroupMenuReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthGroupMenuRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/login/auth_menu_list': {
            post: {
                tags: ['App Login Service'],
                summary: 'AUTH_MENU_LIST',
                operationId: 'authMenuListUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthMenuReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthMenuRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/login/changepassword': {
            post: {
                tags: ['App Login Service'],
                summary: 'CHANGEPASSWORD',
                operationId: 'changePasswordUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/AuthUserInfoReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/AuthUserInfoRes' } } }
            }
        },
        '/BAACCoreService/rest/internal/app/login/user_profile': {
            post: {
                tags: ['App Login Service'],
                summary: 'AUTH_USER_PROFILE',
                operationId: 'authUserProfileUsingPOST',
                consumes: ['application/json'],
                produces: ['*/*'],
                parameters: [
                    { name: 'nplToken', in: 'header', description: 'nplToken', required: true, type: 'string', default: 'dev' },
                    { in: 'body', name: 'requestBody', description: 'requestBody', required: true, schema: { $ref: '#/definitions/UserProfileReq' } }
                ],
                responses: { 200: { description: 'OK', schema: { $ref: '#/definitions/UserProfileRes' } } }
            }
        }
    },
    definitions: {
        AppCommonInfoResp: {
            type: 'object',
            properties: { infoCurrentDt: { type: 'string', format: 'date-time' }, infoDesc: { type: 'string' }, infoLastBuild: { type: 'string' }, infoVersion: { type: 'string' }, restUuid: { type: 'string' }, serverId: { type: 'string' } },
            title: 'AppCommonInfoResp'
        },
        AuthDepartment: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                deptCd: { type: 'string' },
                deptCtl: { type: 'integer', format: 'int32' },
                deptEngNm: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                deptLev: { type: 'string' },
                deptNm: { type: 'string' },
                deptNmCtl: { type: 'string' },
                deptShNm: { type: 'string' },
                email: { type: 'string' },
                fax: { type: 'string' },
                isDeleted: { type: 'integer', format: 'int32' },
                telephone: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'AuthDepartment'
        },
        AuthDepartmentData: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                deptCd: { type: 'string' },
                deptCtl: { type: 'integer', format: 'int32' },
                deptEngNm: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                deptLev: { type: 'string' },
                deptNm: { type: 'string' },
                deptNmCtl: { type: 'string' },
                deptShNm: { type: 'string' },
                email: { type: 'string' },
                fax: { type: 'string' },
                isDeleted: { type: 'integer', format: 'int32' },
                telephone: { type: 'string' },
                updateBy: { type: 'string' }
            },
            title: 'AuthDepartmentData'
        },
        AuthDepartmentReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthDepartmentData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthDepartmentReq'
        },
        AuthDepartmentRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthDepartment' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthDepartmentTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthDepartmentRes'
        },
        AuthDepartmentSearchData: { type: 'object', properties: { deptId: { type: 'integer', format: 'int32' }, deptLev: { type: 'string' }, deptNm: { type: 'string' } }, title: 'AuthDepartmentSearchData' },
        AuthDepartmentSearchLevelTO: {
            type: 'object',
            properties: { deptBranch: { type: 'string' }, deptId: { type: 'integer', format: 'int32' }, deptProvince: { type: 'string' }, deptSector: { type: 'string' } },
            title: 'AuthDepartmentSearchLevelTO'
        },
        AuthDepartmentSearchLevelTOData: { type: 'object', properties: { deptId: { type: 'integer', format: 'int32' } }, title: 'AuthDepartmentSearchLevelTOData' },
        AuthDepartmentSearchLevelTOReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthDepartmentSearchLevelTOData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthDepartmentSearchLevelTOReq'
        },
        AuthDepartmentSearchLevelTORes: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthDepartmentSearchLevelTO' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthDepartmentSearchLevelTORes'
        },
        AuthDepartmentSearchReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthDepartmentSearchData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthDepartmentSearchReq'
        },
        AuthDepartmentSearchRes: {
            type: 'object',
            properties: { dataList: { type: 'array', items: { $ref: '#/definitions/AuthDepartmentSearchTO' } }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthDepartmentSearchRes'
        },
        AuthDepartmentSearchTO: {
            type: 'object',
            properties: {
                deptCd: { type: 'string' },
                deptCtl: { type: 'integer', format: 'int32' },
                deptId: { type: 'integer', format: 'int32' },
                deptLev: { type: 'string' },
                deptNm: { type: 'string' },
                deptNmCtl: { type: 'string' },
                deptShNm: { type: 'string' }
            },
            title: 'AuthDepartmentSearchTO'
        },
        AuthDepartmentTO: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                deptCd: { type: 'string' },
                deptCtl: { type: 'integer', format: 'int32' },
                deptEngNm: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                deptLev: { type: 'integer', format: 'int32' },
                deptNm: { type: 'string' },
                deptNmCtl: { type: 'string' },
                deptShNm: { type: 'string' },
                email: { type: 'string' },
                fax: { type: 'string' },
                isDeleted: { type: 'integer', format: 'int32' },
                telephone: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' }
            },
            title: 'AuthDepartmentTO'
        },
        AuthDepartmentUnit: { type: 'object', properties: { deptId: { type: 'integer', format: 'int32' }, deptNmCtl: { type: 'string' } }, title: 'AuthDepartmentUnit' },
        AuthDepartmentUnitRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthDepartmentUnit' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthDepartmentUnit' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthDepartmentUnitRes'
        },
        AuthDepartmentUpdateRes: {
            type: 'object',
            properties: { deptId: { type: 'integer', format: 'int32' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthDepartmentUpdateRes'
        },
        AuthGroupMenuData: { type: 'object', properties: { userId: { type: 'string' } }, title: 'AuthGroupMenuData' },
        AuthGroupMenuReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthGroupMenuData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthGroupMenuReq'
        },
        AuthGroupMenuRes: {
            type: 'object',
            properties: { dataList: { type: 'array', items: { $ref: '#/definitions/AuthGroupMenuTO' } }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthGroupMenuRes'
        },
        AuthGroupMenuTO: {
            type: 'object',
            properties: {
                icon: { type: 'string' },
                menuLevel: { type: 'integer', format: 'int32' },
                parentSystemId: { type: 'string' },
                rowNum: { type: 'integer', format: 'int32' },
                seq: { type: 'integer', format: 'int32' },
                systemId: { type: 'string' },
                systemName: { type: 'string' }
            },
            title: 'AuthGroupMenuTO'
        },
        AuthGroupProgram: { type: 'object', properties: { groupProgramCode: { type: 'string' }, groupProgramName: { type: 'string' }, updateBy: { type: 'string' }, updateDt: { type: 'string', format: 'date-time' } }, title: 'AuthGroupProgram' },
        AuthGroupProgramData: {
            type: 'object',
            properties: { groupProgramCode: { type: 'string' }, groupProgramName: { type: 'string' }, taskCodeList: { type: 'array', items: { type: 'string' } }, updateBy: { type: 'string' } },
            title: 'AuthGroupProgramData'
        },
        AuthGroupProgramDetail: {
            type: 'object',
            properties: {
                actionDelete: { type: 'integer', format: 'int32' },
                actionExport: { type: 'integer', format: 'int32' },
                actionImport: { type: 'integer', format: 'int32' },
                actionInsert: { type: 'integer', format: 'int32' },
                actionUpdate: { type: 'integer', format: 'int32' },
                actionView: { type: 'integer', format: 'int32' },
                id: { $ref: '#/definitions/AuthGroupProgramDetailPK' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'AuthGroupProgramDetail'
        },
        AuthGroupProgramDetailData: {
            type: 'object',
            properties: {
                actionDelete: { type: 'integer', format: 'int32' },
                actionExport: { type: 'integer', format: 'int32' },
                actionImport: { type: 'integer', format: 'int32' },
                actionInsert: { type: 'integer', format: 'int32' },
                actionUpdate: { type: 'integer', format: 'int32' },
                actionView: { type: 'integer', format: 'int32' },
                groupProgramCode: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                taskCode: { type: 'string' },
                updateBy: { type: 'string' }
            },
            title: 'AuthGroupProgramDetailData'
        },
        AuthGroupProgramDetailPK: { type: 'object', properties: { groupProgramCode: { type: 'string' }, seq: { type: 'integer', format: 'int32' }, taskCode: { type: 'string' } }, title: 'AuthGroupProgramDetailPK' },
        AuthGroupProgramDetailReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthGroupProgramDetailData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthGroupProgramDetailReq'
        },
        AuthGroupProgramDetailRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthGroupProgramDetail' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthGroupProgramDetail' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthGroupProgramDetailRes'
        },
        AuthGroupProgramReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthGroupProgramData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthGroupProgramReq'
        },
        AuthGroupProgramRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthGroupProgram' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthGroupProgramTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                groupProgramCode: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthGroupProgramRes'
        },
        AuthGroupProgramTO: {
            type: 'object',
            properties: { groupProgramCode: { type: 'string' }, groupProgramName: { type: 'string' }, updateBy: { type: 'string' }, updateDt: { type: 'string', format: 'date-time' }, userName: { type: 'string' } },
            title: 'AuthGroupProgramTO'
        },
        AuthIAuthenData: { type: 'object', properties: { ipaddress: { type: 'string' }, password: { type: 'string' }, userId: { type: 'string' } }, title: 'AuthIAuthenData' },
        AuthIAuthenReq: { type: 'object', properties: { data: { $ref: '#/definitions/AuthIAuthenData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'AuthIAuthenReq' },
        AuthIAuthenRes: {
            type: 'object',
            properties: { data: { type: 'object' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, token: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthIAuthenRes'
        },
        AuthLog: {
            type: 'object',
            properties: {
                actionType: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                ipAddress: { type: 'string' },
                logDt: { type: 'string', format: 'date-time' },
                logId: { type: 'string', format: 'date-time' },
                logResult: { type: 'string' },
                userId: { type: 'string' }
            },
            title: 'AuthLog'
        },
        AuthLogData: {
            type: 'object',
            properties: {
                actionType: { type: 'string' },
                dateFrom: { type: 'string' },
                dateTo: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                ipAddress: { type: 'string' },
                logResult: { type: 'string' },
                userId: { type: 'string' }
            },
            title: 'AuthLogData'
        },
        AuthLogError: {
            type: 'object',
            properties: { logDt: { type: 'string', format: 'date-time' }, logIdErr: { type: 'string', format: 'date-time' }, taskCode: { type: 'string' }, textError: { type: 'string' }, userId: { type: 'string' } },
            title: 'AuthLogError'
        },
        AuthLogErrorData: {
            type: 'object',
            properties: { dateFrom: { type: 'string' }, dateTo: { type: 'string' }, logDt: { type: 'string' }, logIdErr: { type: 'string' }, taskCode: { type: 'string' }, textError: { type: 'string' }, userId: { type: 'string' } },
            title: 'AuthLogErrorData'
        },
        AuthLogErrorReq: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthLogErrorData' },
                lang: { type: 'string' },
                maxRange: { type: 'integer', format: 'int32' },
                menuCode: { type: 'string' },
                minRange: { type: 'integer', format: 'int32' },
                mode: { type: 'string' },
                userInfo: { type: 'string' }
            },
            title: 'AuthLogErrorReq'
        },
        AuthLogErrorRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthLogError' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthLogErrorTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthLogErrorRes'
        },
        AuthLogErrorTO: {
            type: 'object',
            properties: {
                deptName: { type: 'string' },
                logDt: { type: 'string', format: 'date-time' },
                logIdErr: { type: 'string', format: 'date-time' },
                nameSurname: { type: 'string' },
                taskCode: { type: 'string' },
                taskName: { type: 'string' },
                textError: { type: 'string' },
                userId: { type: 'string' }
            },
            title: 'AuthLogErrorTO'
        },
        AuthLogReq: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthLogData' },
                lang: { type: 'string' },
                maxRange: { type: 'integer', format: 'int32' },
                menuCode: { type: 'string' },
                minRange: { type: 'integer', format: 'int32' },
                mode: { type: 'string' },
                userInfo: { type: 'string' }
            },
            title: 'AuthLogReq'
        },
        AuthLogRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthLog' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthLogTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthLogRes'
        },
        AuthLogTO: {
            type: 'object',
            properties: {
                actionDesc: { type: 'string' },
                actionType: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                deptName: { type: 'string' },
                ipAddress: { type: 'string' },
                logDt: { type: 'string', format: 'date-time' },
                logId: { type: 'string', format: 'date-time' },
                logResult: { type: 'string' },
                nameSurname: { type: 'string' },
                userId: { type: 'string' }
            },
            title: 'AuthLogTO'
        },
        AuthMenuData: { type: 'object', properties: { userId: { type: 'string' } }, title: 'AuthMenuData' },
        AuthMenuReq: { type: 'object', properties: { data: { $ref: '#/definitions/AuthMenuData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'AuthMenuReq' },
        AuthMenuRes: {
            type: 'object',
            properties: { dataList: { type: 'array', items: { $ref: '#/definitions/AuthMenuTO' } }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthMenuRes'
        },
        AuthMenuTO: {
            type: 'object',
            properties: {
                icon: { type: 'string' },
                icon2: { type: 'string' },
                separatorFlag: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                systemId: { type: 'string' },
                systemName: { type: 'string' },
                taskCode: { type: 'string' },
                taskName: { type: 'string' }
            },
            title: 'AuthMenuTO'
        },
        AuthPayloadJWTReq: {
            type: 'object',
            properties: { createDt: { type: 'string', format: 'date-time' }, expireDt: { type: 'string', format: 'date-time' }, ipAddress: { type: 'string' }, password: { type: 'string' }, userId: { type: 'string' } },
            title: 'AuthPayloadJWTReq'
        },
        AuthPosition: { type: 'object', properties: { positionId: { type: 'integer', format: 'int32' }, positionName: { type: 'string' }, updateBy: { type: 'string' }, updateDt: { type: 'string', format: 'date-time' } }, title: 'AuthPosition' },
        AuthPositionData: { type: 'object', properties: { positionId: { type: 'integer', format: 'int32' }, positionName: { type: 'string' }, updateBy: { type: 'string' } }, title: 'AuthPositionData' },
        AuthPositionReq: { type: 'object', properties: { data: { $ref: '#/definitions/AuthPositionData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'AuthPositionReq' },
        AuthPositionRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthPosition' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthPosition' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthPositionRes'
        },
        AuthSystem: {
            type: 'object',
            properties: {
                icon: { type: 'string' },
                menuLevel: { type: 'string' },
                parentSystemId: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                systemId: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'AuthSystem'
        },
        AuthSystemData: {
            type: 'object',
            properties: {
                icon: { type: 'string' },
                menuLevel: { type: 'string' },
                parentSystemId: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                systemId: { type: 'string' },
                systemName: { type: 'string' },
                updateBy: { type: 'string' }
            },
            title: 'AuthSystemData'
        },
        AuthSystemName: { type: 'object', properties: { id: { $ref: '#/definitions/AuthSystemNamePK' }, systemName: { type: 'string' } }, title: 'AuthSystemName' },
        AuthSystemNameData: { type: 'object', properties: { langType: { type: 'string' }, systemId: { type: 'string' }, systemName: { type: 'string' } }, title: 'AuthSystemNameData' },
        AuthSystemNamePK: { type: 'object', properties: { langType: { type: 'string' }, systemId: { type: 'string' } }, title: 'AuthSystemNamePK' },
        AuthSystemNameReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/AuthSystemNameData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'AuthSystemNameReq'
        },
        AuthSystemNameRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthSystemName' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthSystemName' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthSystemNameRes'
        },
        AuthSystemReq: { type: 'object', properties: { data: { $ref: '#/definitions/AuthSystemData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'AuthSystemReq' },
        AuthSystemRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthSystem' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthSystemTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthSystemRes'
        },
        AuthSystemTO: {
            type: 'object',
            properties: {
                icon: { type: 'string' },
                menuLevel: { type: 'string' },
                parentSystemId: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                systemId: { type: 'string' },
                systemName: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' }
            },
            title: 'AuthSystemTO'
        },
        AuthTask: {
            type: 'object',
            properties: {
                grpTask: { type: 'string' },
                icon: { type: 'string' },
                referencedBy: { type: 'string' },
                separatorFlag: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                showInMenuFlag: { type: 'string' },
                status: { type: 'string' },
                subtaskName: { type: 'string' },
                systemId: { type: 'string' },
                taskCode: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                url: { type: 'string' }
            },
            title: 'AuthTask'
        },
        AuthTaskData: {
            type: 'object',
            properties: {
                grpTask: { type: 'string' },
                icon: { type: 'string' },
                referencedBy: { type: 'string' },
                separatorFlag: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                showInMenuFlag: { type: 'string' },
                status: { type: 'string' },
                subtaskName: { type: 'string' },
                systemId: { type: 'string' },
                taskCode: { type: 'string' },
                taskName: { type: 'string' },
                updateBy: { type: 'string' },
                url: { type: 'string' }
            },
            title: 'AuthTaskData'
        },
        AuthTaskName: { type: 'object', properties: { id: { $ref: '#/definitions/AuthTaskNamePK' }, taskName: { type: 'string' } }, title: 'AuthTaskName' },
        AuthTaskNameData: { type: 'object', properties: { langType: { type: 'string' }, taskCode: { type: 'string' }, taskName: { type: 'string' } }, title: 'AuthTaskNameData' },
        AuthTaskNamePK: { type: 'object', properties: { langType: { type: 'string' }, taskCode: { type: 'string' } }, title: 'AuthTaskNamePK' },
        AuthTaskNameReq: { type: 'object', properties: { data: { $ref: '#/definitions/AuthTaskNameData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'AuthTaskNameReq' },
        AuthTaskNameRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthTaskName' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthTaskName' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthTaskNameRes'
        },
        AuthTaskReq: { type: 'object', properties: { data: { $ref: '#/definitions/AuthTaskData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'AuthTaskReq' },
        AuthTaskRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthTask' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthTaskTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthTaskRes'
        },
        AuthTaskTO: {
            type: 'object',
            properties: {
                grpTask: { type: 'string' },
                icon: { type: 'string' },
                referencedBy: { type: 'string' },
                separatorFlag: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                showInMenuFlag: { type: 'string' },
                status: { type: 'string' },
                subtaskName: { type: 'string' },
                systemId: { type: 'string' },
                systemName: { type: 'string' },
                taskCode: { type: 'string' },
                taskName: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                url: { type: 'string' },
                userName: { type: 'string' }
            },
            title: 'AuthTaskTO'
        },
        AuthUserInfo: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                deptId: { type: 'integer', format: 'int32' },
                email: { type: 'string' },
                enableSound: { type: 'string' },
                homePageCode: { type: 'string' },
                lastLogin: { type: 'string', format: 'date-time' },
                locale: { type: 'string' },
                name: { type: 'string' },
                password: { type: 'string' },
                photoPathName: { type: 'string' },
                pid: { type: 'string' },
                positionId: { type: 'integer', format: 'int32' },
                pwdDt: { type: 'string', format: 'date-time' },
                roleId: { type: 'string' },
                soundName: { type: 'string' },
                status: { type: 'string' },
                surName: { type: 'string' },
                telephone: { type: 'string' },
                theme: { type: 'string' },
                title: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userId: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'AuthUserInfo'
        },
        AuthUserInfoData: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                deptId: { type: 'integer', format: 'int32' },
                email: { type: 'string' },
                enableSound: { type: 'string' },
                homePageCode: { type: 'string' },
                locale: { type: 'string' },
                name: { type: 'string' },
                password: { type: 'string' },
                photoPathName: { type: 'string' },
                pid: { type: 'string' },
                positionId: { type: 'integer', format: 'int32' },
                roleId: { type: 'string' },
                soundName: { type: 'string' },
                status: { type: 'string' },
                surName: { type: 'string' },
                telephone: { type: 'string' },
                theme: { type: 'string' },
                title: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                userId: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'AuthUserInfoData'
        },
        AuthUserInfoDetail: {
            type: 'object',
            properties: { id: { $ref: '#/definitions/AuthUserInfoDetailPK' }, updateBy: { type: 'string' }, updateDt: { type: 'string', format: 'date-time' }, userGroupProgramCode: { type: 'string' } },
            title: 'AuthUserInfoDetail'
        },
        AuthUserInfoDetailData: { type: 'object', properties: { seq: { type: 'integer', format: 'int32' }, updateBy: { type: 'string' }, userGroupProgramCode: { type: 'string' }, userId: { type: 'string' } }, title: 'AuthUserInfoDetailData' },
        AuthUserInfoDetailPK: { type: 'object', properties: { seq: { type: 'integer', format: 'int32' }, userId: { type: 'string' } }, title: 'AuthUserInfoDetailPK' },
        AuthUserInfoDetailReq: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfoDetailData' },
                lang: { type: 'string' },
                maxRange: { type: 'integer', format: 'int32' },
                menuCode: { type: 'string' },
                minRange: { type: 'integer', format: 'int32' },
                mode: { type: 'string' },
                userInfo: { type: 'string' }
            },
            title: 'AuthUserInfoDetailReq'
        },
        AuthUserInfoDetailRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfoDetail' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthUserInfoDetailTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthUserInfoDetailRes'
        },
        AuthUserInfoDetailTO: {
            type: 'object',
            properties: {
                groupProgramName: { type: 'string' },
                id: { $ref: '#/definitions/AuthUserInfoDetailTOPK' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userGroupProgramCode: { type: 'string' },
                userName: { type: 'string' }
            },
            title: 'AuthUserInfoDetailTO'
        },
        AuthUserInfoDetailTOPK: { type: 'object', properties: { seq: { type: 'integer', format: 'int32' }, userId: { type: 'string' } }, title: 'AuthUserInfoDetailTOPK' },
        AuthUserInfoReq: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfoData' },
                lang: { type: 'string' },
                maxRange: { type: 'integer', format: 'int32' },
                menuCode: { type: 'string' },
                minRange: { type: 'integer', format: 'int32' },
                mode: { type: 'string' },
                userInfo: { type: 'string' }
            },
            title: 'AuthUserInfoReq'
        },
        AuthUserInfoRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfo' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthUserInfoTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' },
                userId: { type: 'string' }
            },
            title: 'AuthUserInfoRes'
        },
        AuthUserInfoSearchData: { type: 'object', properties: { deptId: { type: 'integer', format: 'int32' }, name: { type: 'string' }, surName: { type: 'string' }, userId: { type: 'string' } }, title: 'AuthUserInfoSearchData' },
        AuthUserInfoSearchReq: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfoSearchData' },
                lang: { type: 'string' },
                maxRange: { type: 'integer', format: 'int32' },
                menuCode: { type: 'string' },
                minRange: { type: 'integer', format: 'int32' },
                mode: { type: 'string' },
                userInfo: { type: 'string' }
            },
            title: 'AuthUserInfoSearchReq'
        },
        AuthUserInfoSearchRes: {
            type: 'object',
            properties: { dataList: { type: 'array', items: { $ref: '#/definitions/AuthUserInfoSearchTO' } }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'AuthUserInfoSearchRes'
        },
        AuthUserInfoSearchTO: {
            type: 'object',
            properties: {
                deptId: { type: 'integer', format: 'int32' },
                deptNm: { type: 'string' },
                email: { type: 'string' },
                nameSur: { type: 'string' },
                positionCommandId: { type: 'integer', format: 'int32' },
                positionCommandName: { type: 'string' },
                telephone: { type: 'string' },
                userId: { type: 'string' }
            },
            title: 'AuthUserInfoSearchTO'
        },
        AuthUserInfoTO: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                deptId: { type: 'integer', format: 'int32' },
                deptNm: { type: 'string' },
                email: { type: 'string' },
                enableSound: { type: 'string' },
                homePageCode: { type: 'string' },
                locale: { type: 'string' },
                name: { type: 'string' },
                password: { type: 'string' },
                photoPathName: { type: 'string' },
                pid: { type: 'string' },
                positionId: { type: 'integer', format: 'int32' },
                pwdDt: { type: 'string', format: 'date-time' },
                roleId: { type: 'string' },
                soundName: { type: 'string' },
                status: { type: 'string' },
                surName: { type: 'string' },
                telephone: { type: 'string' },
                theme: { type: 'string' },
                title: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userId: { type: 'string' },
                userName: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'AuthUserInfoTO'
        },
        AuthUserInfoTaskData: { type: 'object', properties: { taskCode: { type: 'string' }, userId: { type: 'string' } }, title: 'AuthUserInfoTaskData' },
        AuthUserInfoTaskReq: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfoTaskData' },
                lang: { type: 'string' },
                maxRange: { type: 'integer', format: 'int32' },
                menuCode: { type: 'string' },
                minRange: { type: 'integer', format: 'int32' },
                mode: { type: 'string' },
                userInfo: { type: 'string' }
            },
            title: 'AuthUserInfoTaskReq'
        },
        AuthUserInfoTaskRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/AuthUserInfoTaskTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/AuthUserInfoTaskTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'AuthUserInfoTaskRes'
        },
        AuthUserInfoTaskTO: { type: 'object', properties: { id: { $ref: '#/definitions/AuthUserInfoTaskTOPK' }, isRead: { type: 'integer', format: 'int32' }, taskCode: { type: 'string' } }, title: 'AuthUserInfoTaskTO' },
        AuthUserInfoTaskTOPK: { type: 'object', properties: { seq: { type: 'integer', format: 'int32' }, userId: { type: 'string' } }, title: 'AuthUserInfoTaskTOPK' },
        CheckInfoResp: { type: 'object', properties: { serverContextPath: { type: 'string' }, serverDateTime: { type: 'string' }, serverId: { type: 'string' } }, title: 'CheckInfoResp' },
        CheckLastloginData: { type: 'object', properties: { userId: { type: 'string' } }, title: 'CheckLastloginData' },
        CheckLastloginReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CheckLastloginData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CheckLastloginReq'
        },
        CheckLastloginRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, lastLogin: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CheckLastloginRes'
        },
        CoreConfig: { type: 'object', properties: { isDeleted: { type: 'string' }, updateBy: { type: 'string' }, updateDt: { type: 'string', format: 'date-time' }, varCode: { type: 'string' }, varValue: { type: 'string' } }, title: 'CoreConfig' },
        CoreConfigListData: { type: 'object', properties: { varCode: { type: 'string' } }, title: 'CoreConfigListData' },
        CoreConfigListReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CoreConfigListData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CoreConfigListReq'
        },
        CoreConfigListRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CoreConfig' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CoreConfig' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CoreConfigListRes'
        },
        CtBank: {
            type: 'object',
            properties: {
                abbreviation: { type: 'string' },
                bankCode: { type: 'string' },
                bankName: { type: 'string' },
                displaySeq: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                updateUserId: { type: 'string' }
            },
            title: 'CtBank'
        },
        CtBankData: { type: 'object', properties: { bankCode: { type: 'string' }, bankName: { type: 'string' } }, title: 'CtBankData' },
        CtBankListTO: { type: 'object', properties: { abbreviation: { type: 'string' }, bankCode: { type: 'string' }, bankName: { type: 'string' } }, title: 'CtBankListTO' },
        CtBankListToRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtBankListTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtBankListTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtBankListToRes'
        },
        CtBankReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtBankData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtBankReq' },
        CtBankRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtBank' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtBank' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtBankRes'
        },
        CtBankUpdateData: {
            type: 'object',
            properties: { abbreviation: { type: 'string' }, bankCode: { type: 'string' }, bankName: { type: 'string' }, displaySeq: { type: 'integer', format: 'int32' }, status: { type: 'string' }, updateUserId: { type: 'string' } },
            title: 'CtBankUpdateData'
        },
        CtBankUpdateReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtBankUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtBankUpdateReq' },
        CtBankUpdateRes: { type: 'object', properties: { bankCode: { type: 'string' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } }, title: 'CtBankUpdateRes' },
        CtCourt: {
            type: 'object',
            properties: {
                courtAddress1: { type: 'string' },
                courtAddress2: { type: 'string' },
                courtAddress3: { type: 'string' },
                courtAddress4: { type: 'string' },
                courtCode: { type: 'string' },
                courtId: { type: 'integer', format: 'int32' },
                courtName: { type: 'string' },
                courtType: { type: 'string' },
                district: { type: 'string' },
                email: { type: 'string' },
                fax: { type: 'string' },
                postCode: { type: 'string' },
                province: { type: 'string' },
                status: { type: 'string' },
                subdistrict: { type: 'string' },
                telephone: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtCourt'
        },
        CtCourtData: { type: 'object', properties: { courtId: { type: 'integer', format: 'int32' } }, title: 'CtCourtData' },
        CtCourtReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtCourtData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtCourtReq' },
        CtCourtRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtCourt' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtCourt' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtCourtRes'
        },
        CtCourtUpdateData: {
            type: 'object',
            properties: {
                courtAddress1: { type: 'string' },
                courtAddress2: { type: 'string' },
                courtAddress3: { type: 'string' },
                courtAddress4: { type: 'string' },
                courtCode: { type: 'string' },
                courtId: { type: 'integer', format: 'int32' },
                courtName: { type: 'string' },
                courtType: { type: 'string' },
                district: { type: 'string' },
                email: { type: 'string' },
                fax: { type: 'string' },
                postCode: { type: 'string' },
                province: { type: 'string' },
                status: { type: 'string' },
                subdistrict: { type: 'string' },
                telephone: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtCourtUpdateData'
        },
        CtCourtUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtCourtUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtCourtUpdateReq'
        },
        CtCourtUpdateRes: {
            type: 'object',
            properties: { courtId: { type: 'integer', format: 'int32' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtCourtUpdateRes'
        },
        CtDistrict: {
            type: 'object',
            properties: {
                districtDescription: { type: 'string' },
                id: { $ref: '#/definitions/CtDistrictPK' },
                postCode: { type: 'string' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtDistrict'
        },
        CtDistrictData: {
            type: 'object',
            properties: { districtCode: { type: 'string' }, districtDescription: { type: 'string' }, postCode: { type: 'string' }, provinceCode: { type: 'string' }, status: { type: 'string' }, updateBy: { type: 'string' } },
            title: 'CtDistrictData'
        },
        CtDistrictPK: { type: 'object', properties: { districtCode: { type: 'string' }, provinceCode: { type: 'string' } }, title: 'CtDistrictPK' },
        CtDistrictReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtDistrictData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtDistrictReq' },
        CtDistrictRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtDistrict' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtDistrictTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtDistrictRes'
        },
        CtDistrictTO: {
            type: 'object',
            properties: {
                districtDescription: { type: 'string' },
                id: { $ref: '#/definitions/CtDistrictTOPK' },
                postCode: { type: 'string' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' }
            },
            title: 'CtDistrictTO'
        },
        CtDistrictTOPK: { type: 'object', properties: { districtCode: { type: 'string' }, provinceCode: { type: 'string' } }, title: 'CtDistrictTOPK' },
        CtLanguage: {
            type: 'object',
            properties: {
                displaySeq: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int32' },
                isDeleted: { type: 'integer', format: 'int32' },
                languageCode: { type: 'string' },
                languageShow: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                updateUserId: { type: 'string' }
            },
            title: 'CtLanguage'
        },
        CtLanguageData: { type: 'object', properties: { id: { type: 'integer', format: 'int32' } }, title: 'CtLanguageData' },
        CtLanguageReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtLanguageData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtLanguageReq' },
        CtLanguageRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLanguage' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLanguage' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLanguageRes'
        },
        CtLanguageUpdateData: {
            type: 'object',
            properties: {
                displaySeq: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int32' },
                isDeleted: { type: 'integer', format: 'int32' },
                languageCode: { type: 'string' },
                languageShow: { type: 'string' },
                updateDts: { type: 'string' },
                updateUserId: { type: 'string' }
            },
            title: 'CtLanguageUpdateData'
        },
        CtLanguageUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLanguageUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLanguageUpdateReq'
        },
        CtLanguageUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, id: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtLanguageUpdateRes'
        },
        CtLawFirm: {
            type: 'object',
            properties: {
                birthDt: { type: 'string', format: 'date-time' },
                cardNo: { type: 'string' },
                cardTypeId: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                facebook: { type: 'string' },
                genderId: { type: 'string' },
                isDeleted: { type: 'integer', format: 'int32' },
                lawFirmFname: { type: 'string' },
                lawFirmId: { type: 'integer', format: 'int32' },
                lawFirmLname: { type: 'string' },
                lawFirmNameEng: { type: 'string' },
                lawFirmType: { type: 'string' },
                line: { type: 'string' },
                nationalityId: { type: 'string' },
                phoneNo1: { type: 'string' },
                phoneNo2: { type: 'string' },
                raceId: { type: 'string' },
                remark: { type: 'string' },
                titleCode: { type: 'string' },
                titleId: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtLawFirm'
        },
        CtLawFirmAddress: {
            type: 'object',
            properties: {
                addno: { type: 'string' },
                addressId: { type: 'integer', format: 'int32' },
                alley: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                districtId: { type: 'integer', format: 'int32' },
                email: { type: 'string' },
                isDeleted: { type: 'integer', format: 'int32' },
                lawFirmId: { type: 'integer', format: 'int32' },
                moo: { type: 'string' },
                postCode: { type: 'string' },
                provinceId: { type: 'integer', format: 'int32' },
                street: { type: 'string' },
                subdistrictId: { type: 'integer', format: 'int32' },
                telno1: { type: 'string' },
                telno2: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtLawFirmAddress'
        },
        CtLawFirmAddressFindData: { type: 'object', properties: { addressId: { type: 'integer', format: 'int32' } }, title: 'CtLawFirmAddressFindData' },
        CtLawFirmAddressFindReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLawFirmAddressFindData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLawFirmAddressFindReq'
        },
        CtLawFirmAddressFindRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLawFirmAddress' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLawFirmAddress' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLawFirmAddressFindRes'
        },
        CtLawFirmAddressListTO: {
            type: 'object',
            properties: { addressDesc: { type: 'string' }, addressId: { type: 'integer', format: 'int32' }, email: { type: 'string' }, isDeleted: { type: 'integer', format: 'int32' }, telno1: { type: 'string' }, telno2: { type: 'string' } },
            title: 'CtLawFirmAddressListTO'
        },
        CtLawFirmAddressListToData: { type: 'object', properties: { lawFirmId: { type: 'integer', format: 'int32' } }, title: 'CtLawFirmAddressListToData' },
        CtLawFirmAddressListToReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLawFirmAddressListToData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLawFirmAddressListToReq'
        },
        CtLawFirmAddressListToRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLawFirmAddressListTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLawFirmAddressListTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLawFirmAddressListToRes'
        },
        CtLawFirmAddressUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLawFirmUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLawFirmAddressUpdateReq'
        },
        CtLawFirmAddressUpdateRes: {
            type: 'object',
            properties: { addressId: { type: 'integer', format: 'int32' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtLawFirmAddressUpdateRes'
        },
        CtLawFirmFindData: { type: 'object', properties: { lawFirmId: { type: 'integer', format: 'int32' } }, title: 'CtLawFirmFindData' },
        CtLawFirmFindReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLawFirmFindData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLawFirmFindReq'
        },
        CtLawFirmFindRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLawFirm' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLawFirm' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLawFirmFindRes'
        },
        CtLawFirmListTO: {
            type: 'object',
            properties: {
                isDeleted: { type: 'integer', format: 'int32' },
                isDeletedDesc: { type: 'string' },
                lawFirmFname: { type: 'string' },
                lawFirmId: { type: 'integer', format: 'int32' },
                lawFirmType: { type: 'string' },
                lawFirmTypeDesc: { type: 'string' },
                nameSur: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtLawFirmListTO'
        },
        CtLawFirmListToData: { type: 'object', properties: { isDeleted: { type: 'integer', format: 'int32' }, lawFirmFname: { type: 'string' }, lawFirmType: { type: 'string' } }, title: 'CtLawFirmListToData' },
        CtLawFirmListToReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLawFirmListToData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLawFirmListToReq'
        },
        CtLawFirmListToRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLawFirmListTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLawFirmListTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLawFirmListToRes'
        },
        CtLawFirmUpdateData: {
            type: 'object',
            properties: {
                addno: { type: 'string' },
                addressId: { type: 'integer', format: 'int32' },
                alley: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string' },
                districtId: { type: 'integer', format: 'int32' },
                email: { type: 'string' },
                isDeleted: { type: 'integer', format: 'int32' },
                lawFirmId: { type: 'integer', format: 'int32' },
                moo: { type: 'string' },
                postCode: { type: 'string' },
                provinceId: { type: 'integer', format: 'int32' },
                street: { type: 'string' },
                subdistrictId: { type: 'integer', format: 'int32' },
                telno1: { type: 'string' },
                telno2: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtLawFirmUpdateData'
        },
        CtLawFirmUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLawFirmUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLawFirmUpdateReq'
        },
        CtLawFirmUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, lawFirmId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtLawFirmUpdateRes'
        },
        CtLegalExecution: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                description: { type: 'string' },
                legalExecutionId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtLegalExecution'
        },
        CtLegalExecutionData: { type: 'object', properties: { legalExecutionId: { type: 'integer', format: 'int32' } }, title: 'CtLegalExecutionData' },
        CtLegalExecutionReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLegalExecutionData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLegalExecutionReq'
        },
        CtLegalExecutionRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLegalExecution' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLegalExecution' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLegalExecutionRes'
        },
        CtLegalExecutionUpdateData: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string' },
                description: { type: 'string' },
                legalExecutionId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtLegalExecutionUpdateData'
        },
        CtLegalExecutionUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLegalExecutionUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLegalExecutionUpdateReq'
        },
        CtLegalExecutionUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, legalExecutionId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtLegalExecutionUpdateRes'
        },
        CtLoanInterestRate: {
            type: 'object',
            properties: {
                bankCode: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                dateEnd: { type: 'string', format: 'date-time' },
                dateStart: { type: 'string', format: 'date-time' },
                defaultRate: { type: 'number', format: 'double' },
                intId: { type: 'integer', format: 'int32' },
                isDeleted: { type: 'integer', format: 'int32' },
                mlrRate: { type: 'number', format: 'double' },
                morRate: { type: 'number', format: 'double' },
                mrrRate: { type: 'number', format: 'double' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtLoanInterestRate'
        },
        CtLoanInterestRateData: { type: 'object', properties: { bankCode: { type: 'string' } }, title: 'CtLoanInterestRateData' },
        CtLoanInterestRateFindData: { type: 'object', properties: { intId: { type: 'integer', format: 'int32' } }, title: 'CtLoanInterestRateFindData' },
        CtLoanInterestRateFindReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLoanInterestRateFindData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLoanInterestRateFindReq'
        },
        CtLoanInterestRateFindRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLoanInterestRate' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLoanInterestRate' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLoanInterestRateFindRes'
        },
        CtLoanInterestRateListTO: {
            type: 'object',
            properties: {
                bankCode: { type: 'string' },
                dateEnd: { type: 'string', format: 'date-time' },
                dateStart: { type: 'string', format: 'date-time' },
                defaultRate: { type: 'number', format: 'double' },
                intId: { type: 'integer', format: 'int32' },
                mlrRate: { type: 'number', format: 'double' },
                morRate: { type: 'number', format: 'double' },
                mrrRate: { type: 'number', format: 'double' },
                seq: { type: 'integer', format: 'int32' }
            },
            title: 'CtLoanInterestRateListTO'
        },
        CtLoanInterestRateListToRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtLoanInterestRateListTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtLoanInterestRateListTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtLoanInterestRateListToRes'
        },
        CtLoanInterestRateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLoanInterestRateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLoanInterestRateReq'
        },
        CtLoanInterestRateUpdateData: {
            type: 'object',
            properties: {
                bankCode: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string' },
                dateEnd: { type: 'string' },
                dateStart: { type: 'string' },
                defaultRate: { type: 'number', format: 'double' },
                intId: { type: 'integer', format: 'int32' },
                isDeleted: { type: 'integer', format: 'int32' },
                mlrRate: { type: 'number', format: 'double' },
                morRate: { type: 'number', format: 'double' },
                mrrRate: { type: 'number', format: 'double' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtLoanInterestRateUpdateData'
        },
        CtLoanInterestRateUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtLoanInterestRateUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtLoanInterestRateUpdateReq'
        },
        CtLoanInterestRateUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, intId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtLoanInterestRateUpdateRes'
        },
        CtMainType: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                description: { type: 'string' },
                mainType: { type: 'integer', format: 'int32' },
                seqId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtMainType'
        },
        CtMainTypeData: { type: 'object', properties: { seqId: { type: 'integer', format: 'int32' } }, title: 'CtMainTypeData' },
        CtMainTypeReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtMainTypeData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtMainTypeReq' },
        CtMainTypeRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtMainType' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtMainType' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtMainTypeRes'
        },
        CtMainTypeUpdateData: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string' },
                description: { type: 'string' },
                mainType: { type: 'integer', format: 'int32' },
                seqId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtMainTypeUpdateData'
        },
        CtMainTypeUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtMainTypeUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtMainTypeUpdateReq'
        },
        CtMainTypeUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, seqId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtMainTypeUpdateRes'
        },
        CtMarketCode: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                description: { type: 'string' },
                mainType: { type: 'integer', format: 'int32' },
                marketCode: { type: 'string' },
                seqId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                subType: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtMarketCode'
        },
        CtMarketCodeData: { type: 'object', properties: { seqId: { type: 'integer', format: 'int32' } }, title: 'CtMarketCodeData' },
        CtMarketCodeReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtMarketCodeData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtMarketCodeReq' },
        CtMarketCodeRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtMarketCode' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtMarketCode' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtMarketCodeRes'
        },
        CtMarketCodeUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtMainTypeUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtMarketCodeUpdateReq'
        },
        CtMarketCodeUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, seqId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtMarketCodeUpdateRes'
        },
        CtOriginalAffiliation: {
            type: 'object',
            properties: {
                affiliationId: { type: 'integer', format: 'int32' },
                affiliationName: { type: 'string' },
                displaySeq: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtOriginalAffiliation'
        },
        CtOriginalAffiliationData: { type: 'object', properties: { affiliationId: { type: 'integer', format: 'int32' } }, title: 'CtOriginalAffiliationData' },
        CtOriginalAffiliationReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtOriginalAffiliationData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtOriginalAffiliationReq'
        },
        CtOriginalAffiliationRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtOriginalAffiliation' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtOriginalAffiliation' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtOriginalAffiliationRes'
        },
        CtOriginalAffiliationUpdateData: {
            type: 'object',
            properties: {
                affiliationId: { type: 'integer', format: 'int32' },
                affiliationName: { type: 'string' },
                displaySeq: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtOriginalAffiliationUpdateData'
        },
        CtOriginalAffiliationUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtOriginalAffiliationUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtOriginalAffiliationUpdateReq'
        },
        CtOriginalAffiliationUpdateRes: {
            type: 'object',
            properties: { affiliationId: { type: 'integer', format: 'int32' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtOriginalAffiliationUpdateRes'
        },
        CtPortFindData: { type: 'object', properties: { portId: { type: 'integer', format: 'int32' } }, title: 'CtPortFindData' },
        CtPortFindReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtPortFindData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtPortFindReq' },
        CtPortFindRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtPortFindTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtPortFindTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtPortFindRes'
        },
        CtPortFindTO: {
            type: 'object',
            properties: {
                bankCode: { type: 'string' },
                bankName: { type: 'string' },
                collateralAmount: { type: 'number', format: 'double' },
                costAmount: { type: 'number', format: 'double' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                cutOffDate: { type: 'string', format: 'date-time' },
                dateLastCal: { type: 'string', format: 'date-time' },
                debtAmount: { type: 'number', format: 'double' },
                isDeleted: { type: 'integer', format: 'int32' },
                nameSur: { type: 'string' },
                portCode: { type: 'string' },
                portId: { type: 'integer', format: 'int32' },
                sumCount: { type: 'integer', format: 'int32' },
                transferDate: { type: 'string', format: 'date-time' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                year: { type: 'string' }
            },
            title: 'CtPortFindTO'
        },
        CtPortListTO: {
            type: 'object',
            properties: {
                bankName: { type: 'string' },
                collateralAmount: { type: 'number', format: 'double' },
                costAmount: { type: 'number', format: 'double' },
                debtAmount: { type: 'number', format: 'double' },
                nameSur: { type: 'string' },
                portCode: { type: 'string' },
                portId: { type: 'integer', format: 'int32' },
                seq: { type: 'integer', format: 'int32' },
                sumCount: { type: 'integer', format: 'int32' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtPortListTO'
        },
        CtPortListToData: { type: 'object', properties: { bankCode: { type: 'string' }, year: { type: 'string' } }, title: 'CtPortListToData' },
        CtPortListToReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtPortListToData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtPortListToReq' },
        CtPortListToRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtPortListTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtPortListTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtPortListToRes'
        },
        CtPortUpdateData: {
            type: 'object',
            properties: {
                bankCode: { type: 'string' },
                collateralAmount: { type: 'number', format: 'double' },
                costAmount: { type: 'number', format: 'double' },
                createBy: { type: 'string' },
                createDt: { type: 'string' },
                cutOffDate: { type: 'string' },
                dateLastCal: { type: 'string' },
                debtAmount: { type: 'number', format: 'double' },
                isDeleted: { type: 'integer', format: 'int32' },
                portCode: { type: 'string' },
                portId: { type: 'integer', format: 'int32' },
                sumCount: { type: 'integer', format: 'int32' },
                transferDate: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' },
                year: { type: 'string' }
            },
            title: 'CtPortUpdateData'
        },
        CtPortUpdateReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtPortUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtPortUpdateReq' },
        CtPortUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, portId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtPortUpdateRes'
        },
        CtPortYearTO: { type: 'object', properties: { year: { type: 'integer', format: 'int32' } }, title: 'CtPortYearTO' },
        CtPortYearToRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtPortYearTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtPortYearTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtPortYearToRes'
        },
        CtProvince: {
            type: 'object',
            properties: {
                provinceCode: { type: 'string' },
                provinceDescription: { type: 'string' },
                regionNo: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtProvince'
        },
        CtProvinceData: {
            type: 'object',
            properties: { provinceCode: { type: 'string' }, provinceDescription: { type: 'string' }, regionNo: { type: 'integer', format: 'int32' }, status: { type: 'string' }, updateBy: { type: 'string' } },
            title: 'CtProvinceData'
        },
        CtProvinceReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtProvinceData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtProvinceReq' },
        CtProvinceRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtProvince' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtProvinceTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                provinceCode: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtProvinceRes'
        },
        CtProvinceTO: {
            type: 'object',
            properties: {
                provinceCode: { type: 'string' },
                provinceDescription: { type: 'string' },
                regionNo: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' }
            },
            title: 'CtProvinceTO'
        },
        CtSubDistrict: {
            type: 'object',
            properties: { id: { $ref: '#/definitions/CtSubDistrictPK' }, status: { type: 'string' }, subdistrictDescription: { type: 'string' }, updateBy: { type: 'string' }, updateDt: { type: 'string', format: 'date-time' } },
            title: 'CtSubDistrict'
        },
        CtSubDistrictData: {
            type: 'object',
            properties: { districtCode: { type: 'string' }, provinceCode: { type: 'string' }, status: { type: 'string' }, subdistrictCode: { type: 'string' }, subdistrictDescription: { type: 'string' }, updateBy: { type: 'string' } },
            title: 'CtSubDistrictData'
        },
        CtSubDistrictPK: { type: 'object', properties: { districtCode: { type: 'string' }, provinceCode: { type: 'string' }, subdistrictCode: { type: 'string' } }, title: 'CtSubDistrictPK' },
        CtSubDistrictReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtSubDistrictData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtSubDistrictReq'
        },
        CtSubDistrictRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtSubDistrict' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtSubDistrictTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtSubDistrictRes'
        },
        CtSubDistrictTO: {
            type: 'object',
            properties: {
                id: { $ref: '#/definitions/CtSubDistrictTOPK' },
                status: { type: 'string' },
                subdistrictDescription: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' }
            },
            title: 'CtSubDistrictTO'
        },
        CtSubDistrictTOPK: { type: 'object', properties: { districtCode: { type: 'string' }, provinceCode: { type: 'string' }, subdistrictCode: { type: 'string' } }, title: 'CtSubDistrictTOPK' },
        CtSubType: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                description: { type: 'string' },
                mainType: { type: 'integer', format: 'int32' },
                seqId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                subType: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtSubType'
        },
        CtSubTypeData: { type: 'object', properties: { seqId: { type: 'integer', format: 'int32' } }, title: 'CtSubTypeData' },
        CtSubTypeReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtSubTypeData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtSubTypeReq' },
        CtSubTypeRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtSubType' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtSubType' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtSubTypeRes'
        },
        CtSubTypeUpdateData: {
            type: 'object',
            properties: {
                createBy: { type: 'string' },
                createDt: { type: 'string' },
                description: { type: 'string' },
                mainType: { type: 'integer', format: 'int32' },
                seqId: { type: 'integer', format: 'int32' },
                status: { type: 'string' },
                subType: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string' }
            },
            title: 'CtSubTypeUpdateData'
        },
        CtSubTypeUpdateReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtSubTypeUpdateData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtSubTypeUpdateReq'
        },
        CtSubTypeUpdateRes: {
            type: 'object',
            properties: { errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, seqId: { type: 'integer', format: 'int32' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtSubTypeUpdateRes'
        },
        CtTableCode: {
            type: 'object',
            properties: {
                description: { type: 'string' },
                displaySeq: { type: 'integer', format: 'int32' },
                id: { $ref: '#/definitions/CtTableCodePK' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' }
            },
            title: 'CtTableCode'
        },
        CtTableCodeData: {
            type: 'object',
            properties: { ctCode: { type: 'string' }, ctType: { type: 'string' }, description: { type: 'string' }, displaySeq: { type: 'integer', format: 'int32' }, status: { type: 'string' }, updateBy: { type: 'string' } },
            title: 'CtTableCodeData'
        },
        CtTableCodePK: { type: 'object', properties: { ctCode: { type: 'string' }, ctType: { type: 'string' } }, title: 'CtTableCodePK' },
        CtTableCodeReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtTableCodeData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtTableCodeReq' },
        CtTableCodeRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtTableCode' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtTableCodeTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtTableCodeRes'
        },
        CtTableCodeTO: {
            type: 'object',
            properties: {
                description: { type: 'string' },
                displaySeq: { type: 'integer', format: 'int32' },
                id: { $ref: '#/definitions/CtTableCodeTOPK' },
                status: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' }
            },
            title: 'CtTableCodeTO'
        },
        CtTableCodeTOPK: { type: 'object', properties: { ctCode: { type: 'string' }, ctType: { type: 'string' } }, title: 'CtTableCodeTOPK' },
        CtVendor: {
            type: 'object',
            properties: {
                birthDt: { type: 'string', format: 'date-time' },
                cardNo: { type: 'string' },
                cardTypeid: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                facebook: { type: 'string' },
                genderId: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                line: { type: 'string' },
                nationalityId: { type: 'string' },
                phoneNo1: { type: 'string' },
                phoneNo2: { type: 'string' },
                raceId: { type: 'string' },
                remark: { type: 'string' },
                titleCode: { type: 'string' },
                titleId: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                vendorFname: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' },
                vendorLname: { type: 'string' },
                vendorNameEng: { type: 'string' },
                vendorType: { type: 'string' }
            },
            title: 'CtVendor'
        },
        CtVendorAddress: {
            type: 'object',
            properties: {
                addno: { type: 'string' },
                addressId: { type: 'integer', format: 'int32' },
                alley: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                districtId: { type: 'integer', format: 'int32' },
                email: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                moo: { type: 'string' },
                postCode: { type: 'string' },
                provinceId: { type: 'integer', format: 'int32' },
                street: { type: 'string' },
                subdistrictId: { type: 'integer', format: 'int32' },
                telno1: { type: 'string' },
                telno2: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAddress'
        },
        CtVendorAddressData: {
            type: 'object',
            properties: {
                addno: { type: 'string' },
                addressId: { type: 'integer', format: 'int32' },
                alley: { type: 'string' },
                createBy: { type: 'string' },
                districtId: { type: 'integer', format: 'int32' },
                email: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                moo: { type: 'string' },
                postCode: { type: 'string' },
                provinceId: { type: 'integer', format: 'int32' },
                street: { type: 'string' },
                subdistrictId: { type: 'integer', format: 'int32' },
                telno1: { type: 'string' },
                telno2: { type: 'string' },
                updateBy: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAddressData'
        },
        CtVendorAddressReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtVendorAddressData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtVendorAddressReq'
        },
        CtVendorAddressRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtVendorAddress' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtVendorAddressTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAddressRes'
        },
        CtVendorAddressTO: {
            type: 'object',
            properties: {
                addno: { type: 'string' },
                addressId: { type: 'integer', format: 'int32' },
                alley: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                districtId: { type: 'integer', format: 'int32' },
                districtName: { type: 'string' },
                email: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                moo: { type: 'string' },
                postCode: { type: 'string' },
                provinceId: { type: 'integer', format: 'int32' },
                provinceName: { type: 'string' },
                street: { type: 'string' },
                subdistrictId: { type: 'integer', format: 'int32' },
                subdistrictName: { type: 'string' },
                telno1: { type: 'string' },
                telno2: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAddressTO'
        },
        CtVendorAddressUpdateRes: {
            type: 'object',
            properties: { addressId: { type: 'integer', format: 'int32' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'CtVendorAddressUpdateRes'
        },
        CtVendorAttach: {
            type: 'object',
            properties: {
                attachDetail: { type: 'string' },
                attachFileext: { type: 'string' },
                attachFilename: { type: 'string' },
                attachFileoriginalName: { type: 'string' },
                attachId: { type: 'integer', format: 'int32' },
                attachTypeid: { type: 'integer', format: 'int32' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                isdeleted: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                urlFile: { type: 'string' },
                urlFileThumbnail: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAttach'
        },
        CtVendorAttachData: {
            type: 'object',
            properties: {
                attachDetail: { type: 'string' },
                attachFileext: { type: 'string' },
                attachFilename: { type: 'string' },
                attachFileoriginalName: { type: 'string' },
                attachId: { type: 'integer', format: 'int32' },
                attachTypeid: { type: 'integer', format: 'int32' },
                createBy: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAttachData'
        },
        CtVendorAttachReq: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/CtVendorAttachData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'CtVendorAttachReq'
        },
        CtVendorAttachRes: {
            type: 'object',
            properties: {
                attachId: { type: 'integer', format: 'int32' },
                data: { $ref: '#/definitions/CtVendorAttach' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtVendorAttach' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorAttachRes'
        },
        CtVendorData: {
            type: 'object',
            properties: {
                birthDt: { type: 'string' },
                cardNo: { type: 'string' },
                cardTypeid: { type: 'string' },
                createBy: { type: 'string' },
                facebook: { type: 'string' },
                genderId: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                line: { type: 'string' },
                nationalityId: { type: 'string' },
                phoneNo1: { type: 'string' },
                phoneNo2: { type: 'string' },
                raceId: { type: 'string' },
                remark: { type: 'string' },
                titleCode: { type: 'string' },
                titleId: { type: 'string' },
                updateBy: { type: 'string' },
                vendorFname: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' },
                vendorLname: { type: 'string' },
                vendorNameEng: { type: 'string' },
                vendorType: { type: 'string' }
            },
            title: 'CtVendorData'
        },
        CtVendorReq: { type: 'object', properties: { data: { $ref: '#/definitions/CtVendorData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'CtVendorReq' },
        CtVendorRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/CtVendor' },
                dataList: { type: 'array', items: { $ref: '#/definitions/CtVendorTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' },
                vendorId: { type: 'integer', format: 'int32' }
            },
            title: 'CtVendorRes'
        },
        CtVendorTO: {
            type: 'object',
            properties: {
                birthDt: { type: 'string', format: 'date-time' },
                cardNo: { type: 'string' },
                cardTypeid: { type: 'string' },
                createBy: { type: 'string' },
                createDt: { type: 'string', format: 'date-time' },
                facebook: { type: 'string' },
                genderId: { type: 'string' },
                isdeleted: { type: 'integer', format: 'int32' },
                line: { type: 'string' },
                nationalityId: { type: 'string' },
                phoneNo1: { type: 'string' },
                phoneNo2: { type: 'string' },
                raceId: { type: 'string' },
                remark: { type: 'string' },
                titleCode: { type: 'string' },
                titleId: { type: 'string' },
                updateBy: { type: 'string' },
                updateDt: { type: 'string', format: 'date-time' },
                userName: { type: 'string' },
                vendorFname: { type: 'string' },
                vendorId: { type: 'integer', format: 'int32' },
                vendorLname: { type: 'string' },
                vendorNameEng: { type: 'string' },
                vendorType: { type: 'string' },
                vendorTypeName: { type: 'string' }
            },
            title: 'CtVendorTO'
        },
        PFindDeptNmCtlData: { type: 'object', properties: { pdeptId: { type: 'integer', format: 'int32' }, pdeptLev: { type: 'string' } }, title: 'PFindDeptNmCtlData' },
        PFindDeptNmCtlParam: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/PFindDeptNmCtlData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } },
            title: 'PFindDeptNmCtlParam'
        },
        PFindDeptNmCtlRes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/PFindDeptNmCtlSP' },
                dataList: { type: 'array', items: { $ref: '#/definitions/PFindDeptNmCtlSP' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'PFindDeptNmCtlRes'
        },
        PFindDeptNmCtlSP: { type: 'object', properties: { deptNmCtl: { type: 'string' } }, title: 'PFindDeptNmCtlSP' },
        PostcodeListTO: {
            type: 'object',
            properties: {
                districtCode: { type: 'string' },
                districtDescription: { type: 'string' },
                postCode: { type: 'string' },
                provinceCode: { type: 'string' },
                provinceDescription: { type: 'string' },
                seq: { type: 'integer', format: 'int32' },
                subdistrictCode: { type: 'string' },
                subdistrictDescription: { type: 'string' }
            },
            title: 'PostcodeListTO'
        },
        PostcodeTOData: { type: 'object', properties: { postCode: { type: 'string' }, provinceCode: { type: 'string' } }, title: 'PostcodeTOData' },
        PostcodeTOReq: { type: 'object', properties: { data: { $ref: '#/definitions/PostcodeTOData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'PostcodeTOReq' },
        PostcodeTORes: {
            type: 'object',
            properties: {
                data: { $ref: '#/definitions/PostcodeListTO' },
                dataList: { type: 'array', items: { $ref: '#/definitions/PostcodeListTO' } },
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'PostcodeTORes'
        },
        UploadFileData: { type: 'object', properties: { fileBase64: { type: 'string' }, fileType: { type: 'string' }, isTempFile: { type: 'boolean' } }, title: 'UploadFileData' },
        UploadFileReq: { type: 'object', properties: { data: { $ref: '#/definitions/UploadFileData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'UploadFileReq' },
        UploadFileRes: {
            type: 'object',
            properties: {
                errorcode: { type: 'integer', format: 'int32' },
                errormessage: { type: 'string' },
                filePath: { type: 'string' },
                filePathThumbnail: { type: 'string' },
                fileUrl: { type: 'string' },
                fileUrlThumbnail: { type: 'string' },
                filename: { type: 'string' },
                filenameThumbnail: { type: 'string' },
                totalCount: { type: 'integer', format: 'int32' }
            },
            title: 'UploadFileRes'
        },
        UserProfileData: { type: 'object', properties: { userId: { type: 'string' } }, title: 'UserProfileData' },
        UserProfileReq: { type: 'object', properties: { data: { $ref: '#/definitions/UserProfileData' }, lang: { type: 'string' }, menuCode: { type: 'string' }, mode: { type: 'string' }, userInfo: { type: 'string' } }, title: 'UserProfileReq' },
        UserProfileRes: {
            type: 'object',
            properties: { data: { $ref: '#/definitions/UserProfileTO' }, errorcode: { type: 'integer', format: 'int32' }, errormessage: { type: 'string' }, totalCount: { type: 'integer', format: 'int32' } },
            title: 'UserProfileRes'
        },
        UserProfileTO: {
            type: 'object',
            properties: {
                deptId: { type: 'integer', format: 'int32' },
                deptLev: { type: 'string' },
                deptNm: { type: 'string' },
                name: { type: 'string' },
                password: { type: 'string' },
                positionName: { type: 'string' },
                surName: { type: 'string' },
                title: { type: 'string' },
                titleDescription: { type: 'string' },
                userId: { type: 'string' }
            },
            title: 'UserProfileTO'
        }
    }
};
