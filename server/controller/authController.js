const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET;

exports.register = (req, res, next) => {
    console.log('inside register')
    const { email, password, name} = req.body
    let newUser = null

    //create a new user if does not exist
    const create = (user) => {
        console.log('inside create')
        if(user){
            throw new Error('username exists')
        }else{
            return User.create(email, password, name)
        }
    }

    //const the number of the user
    const count = (user) => {
        console.log('inside count')
        newUser = user
        return User.count({}).exec()
    }

    //assign admin if count is 1
    const assign = (count) => {
        console.log('inside assign')
        if(count === 1) {
            return newUser.assignAdmin()
        } else {
            return Promise.resolve(false)
        }
    }

    //respond the client
    const respond = (isAdmin) => {
        console.log('inside respond')
        res.json({
            message: 'resistered successfully',
        })
    }

    //run when there is error (username exists)
    const onError = (error) => {
        console.log('inside onError')
        res.status(409).json({
            message: 'onError ' + error.message + ":" + email
        })
    }

    //check username duplication
    User.findOneByEmail(email)
        .then(create)
        .then(count)
        .then(assign)
        .then(respond)
        .catch(onError)
}

exports.login = (req, res, next) => {
    console.log('inside login')
    const {email, password} = req.body

    const check = (user) => {

        if(!user) {
            throw Exception('Check Email')
        } else {
            if(user.verify(password)) {
                const p = new Promise((resolve, reject) => {
                    console.log(user)
                    jwt.sign(
                        {
                            _id: user._id,
                            email: user.email,
                            name: user.name,
                            status: user.status
                        },
                        jwtSecret,
                        {
                            expiresIn: '7d',
                            issuer: '',
                            subject: 'userinfo'
                        }, (err, token) => {
                            console.log('inside jwt.sign')
                            if(err) reject(err)
                            console.log('test1')
                            resolve({
                                token,
                                name: username
                            })
                        })
                })
                console.log('return promise')
                return p

            } else {
                throw new Error('Check Password')
            }
        }
    } 

    const respond = (data, name) => {
        console.log('inside respond')
        res.json({
            message: 'logged in successfully',
            token: data.token,
            name: data.name
        })
    }

    const onError = (error) => {
        console.log('inside onError')
        res.status(403).json({
            message: error.message
        })
    }

    User.findOneByEmail(email)
        .then(check)
        .then(respond)
        .catch(onError)
};

exports.check = (req, res) => {
    console.log('inside check');

    if (!req.decoded) {
        // If decoded information is not available, it means token verification failed
        return res.status(401).json({
            success: false,
            message: 'Token verification failed'
        });
    }


    
    // Token verification succeeded
    const userInfo = req.decoded;
    console.log('userInfouserInfo check', userInfo);

    // You can now use userInfo in your response or perform other actions
    res.json({
        success: true,
        info: userInfo
    });
};



exports.me = (req, res) => {
    console.log('inside me')
    res.json({
        success: true,
        info: req.decoded
    })
}


var request = require('request')
// 0. 네이버에서 로그인 시작.
exports.naver = (req, res, next) => {

    const client_id = process.env.NAVER_CLIENT_KEY
    const client_secret = process.env.NAVER_CLIENT_SECRET
    const state = "RAMDOM_STATE";
    const redirectURI = encodeURI(`${process.env.NAVER_CALLBACK_URL}`);
    console.log(process.env.NAVER_CALLBACK_URL)
    console.log(redirectURI)
    // console.log(client_id)
    let api_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirectURI}&state=${state}`

    res.json(api_url)


}
// 1. 네이버에서 콜백(토큰데이터) 받기
exports.naver_callback = (req, res, next) => {

    const code = req.query.code;
    const state = req.query.state;
    const client_id = process.env.NAVER_CLIENT_KEY
    const client_secret = process.env.NAVER_CLIENT_SECRET
    const redirectURI = encodeURI(`${process.env.NAVER_CALLBACK_URL}`);

    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
        + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(200, JSON.parse(body))
            console.log('naver_callback!!',JSON.parse(body));
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });

}
// 2. 네이버로 토큰정보 다시 보내서 정보받아오기.
exports.naver_me = (req, res, next) => {
    getNaverMe(req.body)
        .then((data) => {
            console.log(data)
            res.json(200,data)
        })
        .catch((err) => {
            res.status(403).json({
                message: error
            })
        })

}
// ↑ getNaverMe ↓
var getNaverMe = function (data) {
    return new Promise((resolve,reject) => {
        var token = data['access_token']
        var header = "Bearer " + token;
        var api_url = 'https://openapi.naver.com/v1/nid/me';
        var options = {
            url: api_url,
            headers: {'Authorization': header}
        };
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body))
                console.log('getNaverMe!!',JSON.parse(body));
            } else {
                console.log('error');
                if(response != null) {
                    console.log('error = ' + response.statusCode);
                }
                reject(error)
            }
        });
    })
}







// 나중에 여기서 지울거 지우기. id, nickname, age, gender, email, mobile, name, birthday, birthYear

exports.naver_register = (req, res, next) => {        
    console.log ('확인하세용', req.body)
    const { id, nickname, age, gender, email, mobile, name, birthday, birthYear, access_token } = req.body
    const snsId = id
    const provider = 'naver'
    const status = 'user'

    const create = function (user) {
        if( user ) {
            return Promise.resolve(user)
        }else{
            return User.social_create( snsId, nickname, age, gender, email, mobile, name, birthday, birthYear, status, provider, access_token)
        }
    }

    const respond = (user) => {
        console.log('response.data', user);
        // create JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h'
        });
        res.json({
          message: 'register in successfully',
          token: token, // include the JWT token in the response
          id: user._id,
          status: status,
          email: email,
        });

      };

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    //check username duplication
    User.findOneByEmailAndProvider(id, provider)
        .then(create)
        .then(respond)
        .catch(onError)
}




