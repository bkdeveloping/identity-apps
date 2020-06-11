/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { CommonDeploymentConfigInterface } from "@wso2is/core/models";
import { GlobalConfig } from "./globals";
import { ServiceResourceEndpointsInterface, UIConfigInterface } from "../models";

interface ServiceResourcesType {
    applications: string;
    associations: string;
    authorize: string;
    challenges: string;
    challengeAnswers: string;
    consents: string;
    federatedAssociations: string;
    fidoEnd: string;
    fidoMetaData: string;
    fidoStart: string;
    fidoStartUsernameless: string;
    issuer: string;
    jwks: string;
    logout: string;
    me: string;
    pendingApprovals: string;
    profileSchemas: string;
    receipts: string;
    sessions: string;
    token: string;
    totp: string;
    totpSecret: string;
    user: string;
    revoke: string;
    wellKnown: string;
}

export const ServiceResourcesEndpoint: ServiceResourcesType = {
    applications: `${GlobalConfig.serverHost}/api/users/v1/me/applications`,
    associations: `${GlobalConfig.serverHost}/api/users/v1/me/associations`,
    authorize: `${GlobalConfig.serverHost}/oauth2/authorize`,
    challengeAnswers: `${GlobalConfig.serverHost}/api/users/v1/me/challenge-answers`,
    challenges: `${GlobalConfig.serverHost}/api/users/v1/me/challenges`,
    consents: `${GlobalConfig.serverHost}/api/identity/consent-mgt/v1.0/consents`,
    federatedAssociations: `${GlobalConfig.serverHost}/api/users/v1/me/federated-associations`,
    fidoEnd: `${GlobalConfig.serverHost}/api/users/v2/me/webauthn/finish-registration`,
    fidoMetaData: `${GlobalConfig.serverHost}/api/users/v2/me/webauthn`,
    fidoStart: `${GlobalConfig.serverHost}/api/users/v2/me/webauthn/start-registration`,
    fidoStartUsernameless: `${GlobalConfig.serverHost}/api/users/v2/me/webauthn/start-usernameless-registration`,
    issuer: `${GlobalConfig.serverHost}/oauth2/token`,
    jwks: `${GlobalConfig.serverHost}/oauth2/jwks`,
    logout: `${GlobalConfig.serverHost}/oidc/logout`,
    me: `${GlobalConfig.serverHost}/scim2/Me`,
    pendingApprovals: `${GlobalConfig.serverHost}/api/users/v1/me/approval-tasks`,
    profileSchemas: `${GlobalConfig.serverHost}/scim2/Schemas`,
    receipts: `${GlobalConfig.serverHost}/api/identity/consent-mgt/v1.0/consents/receipts`,
    revoke: `${GlobalConfig.serverHost}/oauth2/revoke`,
    sessions: `${GlobalConfig.serverHost}/api/users/v1/me/sessions`,
    token: `${GlobalConfig.serverHost}/oauth2/token`,
    totp: `${GlobalConfig.serverHost}/api/users/v1/me/totp`,
    totpSecret: `${GlobalConfig.serverHost}/api/users/v1/me/totp/secret`,
    user: `${GlobalConfig.serverHost}/api/identity/user/v1.0/me`,
    wellKnown: `${GlobalConfig.serverHost}/oauth2/oidcdiscovery/.well-known/openid-configuration`
};

/**
 * Class to handle application config operations.
 */
export class Config {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() { }

    /**
     * Get the deployment config.
     *
     * @return {CommonDeploymentConfigInterface} Deployment config object.
     */
    public static getDeploymentConfig(): CommonDeploymentConfigInterface {
        return {
            appBaseName: window["AppUtils"].getConfig().appBaseWithTenant,
            appBaseNameWithoutTenant: window["AppUtils"].getConfig().appBase,
            appHomePath: window["AppUtils"].getConfig().routes.home,
            appLoginPath: window["AppUtils"].getConfig().routes.login,
            applicationName: window["AppUtils"].getConfig().ui.appName,
            clientHost: window["AppUtils"].getConfig().clientOriginWithTenant,
            clientID: window["AppUtils"].getConfig().clientID,
            clientOrigin: window["AppUtils"].getConfig().clientOrigin,
            loginCallbackUrl: window["AppUtils"].getConfig().loginCallbackURL,
            productVersion: window["AppUtils"].getConfig().productVersion,
            serverHost: window["AppUtils"].getConfig().serverOriginWithTenant,
            serverOrigin: window["AppUtils"].getConfig().serverOrigin,
            tenant: window["AppUtils"].getConfig().tenant,
            tenantPath: window["AppUtils"].getConfig().tenantPath
        };
    }

    /**
     * Get the the list of service resource endpoints.
     *
     * @return {ServiceResourceEndpointsInterface} Service resource endpoints as an object.
     */
    public static getServiceResourceEndpoints(): ServiceResourceEndpointsInterface {
        return {
            applications: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/applications`,
            associations: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/associations`,
            authorize: `${this.getDeploymentConfig().serverHost}/oauth2/authorize`,
            challengeAnswers: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/challenge-answers`,
            challenges: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/challenges`,
            consents: `${this.getDeploymentConfig().serverHost}/api/identity/consent-mgt/v1.0/consents`,
            federatedAssociations: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/federated-associations`,
            fidoEnd: `${this.getDeploymentConfig().serverHost}/api/users/v2/me/webauthn/finish-registration`,
            fidoMetaData: `${this.getDeploymentConfig().serverHost}/api/users/v2/me/webauthn`,
            fidoStart: `${this.getDeploymentConfig().serverHost}/api/users/v2/me/webauthn/start-registration`,
            fidoStartUsernameless: `${this.getDeploymentConfig().serverHost}/api/users/v2/me/webauthn/
            start-usernameless-registration`,
            issuer: `${this.getDeploymentConfig().serverHost}/oauth2/token`,
            jwks: `${this.getDeploymentConfig().serverHost}/oauth2/jwks`,
            logout: `${this.getDeploymentConfig().serverHost}/oidc/logout`,
            me: `${this.getDeploymentConfig().serverHost}/scim2/Me`,
            pendingApprovals: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/approval-tasks`,
            profileSchemas: `${this.getDeploymentConfig().serverHost}/scim2/Schemas`,
            receipts: `${this.getDeploymentConfig().serverHost}/api/identity/consent-mgt/v1.0/consents/receipts`,
            revoke: `${this.getDeploymentConfig().serverHost}/oauth2/revoke`,
            sessions: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/sessions`,
            token: `${this.getDeploymentConfig().serverHost}/oauth2/token`,
            totp: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/totp`,
            totpSecret: `${this.getDeploymentConfig().serverHost}/api/users/v1/me/totp/secret`,
            user: `${this.getDeploymentConfig().serverHost}/api/identity/user/v1.0/me`,
            wellKnown: `${this.getDeploymentConfig().serverHost}/oauth2/oidcdiscovery/.well-known/openid-configuration`
        }
    }

    /**
     * Get UI config.
     *
     * @return {UIConfigInterface} UI config object.
     */
    public static getUIConfig(): UIConfigInterface {
        return {
            authenticatorApp: { apps: [ { link: "", name: "" } ] },
            copyrightText: `${window["AppUtils"].getConfig().ui.appCopyright} \u00A9 ${ new Date().getFullYear() }`,
            titleText: window["AppUtils"].getConfig().appTitle
        };
    }
}
