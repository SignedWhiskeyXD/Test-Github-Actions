import request from 'supertest'
import {afterAll, describe, expect, test} from "@jest/globals";

import {app, server} from "../app.js";

describe('Testing http entry point', () => {
    test('It should response with plain text \'world\'', async () => {
        const response = await request(app).get('/hello');
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual('world');
    })
})

afterAll(done => {
    server.close();
    done();
})