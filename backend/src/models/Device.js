const { default: mongoose } = require('mongoose');
const { Schema } = mongoose;

const AHUSchema = {
    "운전 모드": Number,
    "온도 설정값": Number,
    "실내팬 설정값": Number,
    "실외팬 설정값": Number,
    "COMP 설정값": Number,
    "EEV 설정값": Number,
    "EEV 냉방 초기개도 설정값": Number,
    "EEV 냉방 기동보류 설정값": Number,
    "EEV 냉방 과열도 설정값": Number,
    "EEV 냉방 제어주기 설정값": Number,
    "EEV 냉방 P값 설정값": Number,
    "EEV 냉방 I값 설정값": Number,
    "EEV 난방 초기개도 설정값": Number,
    "EEV 난방 기동보류 설정값": Number,
    "EEV 난방 과열도 설정값": Number,
    "EEV 난방 제어주기 설정값": Number,
    "EEV 난방 P값 설정값": Number,
    "EEV 난방 I값 설정값": Number,
    "압축기 제어주기 설정값": Number,
    "압축기 제어량 설정값": Number,
    "댐퍼1": Number,
    "댐퍼2": Number,
    "댐퍼3": Number,
    "댐퍼4": Number,
    "댐퍼5": Number,
    "댐퍼6": Number,
    "댐퍼7": Number,
    "댐퍼8": Number,
    "댐퍼9": Number,
    "댐퍼10": Number,
    "댐퍼11": Number,
    "댐퍼12": Number,
    "실내 PM2.5값": Number,
    "실내 CO2값": Number,
    "토출정압": Number,
    "실내팬 측정값": Number,
    "실외팬 측정값": Number,
    "압축기 설정값": Number,
    "압축기 측정값": Number,
    "EEV 측정값": Number,
    "외기 온도": Number,
    "토출 온도": Number,
    "흡입 온도": Number,
    "응축 온도": Number,
    "실내 온도": Number,
    "증발 온도": Number,
    "직류 전압": Number,
    "교류 전류": Number,
    "IMP 온도": Number,
    "압축기 에러": Number,
    "압축기 트립": Number,
}

const diffuserSchema = {
    "디퓨저 거실1 급기 설정값": Number,
    "디퓨저 거실2 급기 설정값": Number,
    "디퓨저 침실1 급기 설정값": Number,
    "디퓨저 침실2 급기 설정값": Number,
    "디퓨저 침실3 급기 설정값": Number,
    "디퓨저 거실1 환기 설정값": Number,
    "디퓨저 거실2 환기 설정값": Number,
    "디퓨저 침실1 환기 설정값": Number,
    "디퓨저 침실2 환기 설정값": Number,
    "디퓨저 침실3 환기 설정값": Number,
    "디퓨저 거실1 급기 현재값": Number,
    "디퓨저 거실2 급기 현재값": Number,
    "디퓨저 침실1 급기 현재값": Number,
    "디퓨저 침실2 급기 현재값": Number,
    "디퓨저 침실3 급기 현재값": Number,
    "디퓨저 거실1 환기 현재값": Number,
    "디퓨저 거실2 환기 현재값": Number,
    "디퓨저 침실1 환기 현재값": Number,
    "디퓨저 침실2 환기 현재값": Number,
    "디퓨저 침실3 환기 현재값": Number,
}

const airVolumeMeterSchema = {
    "공조기 급기 풍량": Number,
    "공조기 환기 풍량": Number,
    "거실1 급기 풍량": Number,
    "거실1 환기 풍량": Number,
    "거실2 급기 풍량": Number,
    "거실2 환기 풍량": Number,
    "침실1 급기 풍량": Number,
    "침실1 환기 풍량": Number,
    "침실2 급기 풍량": Number,
    "침실2 환기 풍량": Number,
    "침실3 급기 풍량": Number,
    "침실3 환기 풍량": Number
}

const SMUSchema = {
    "SMU 거실1 모드": Number,
    "SMU 거실1 목표 개도값": Number,
    "SMU 거실1 설정 풍량": Number,
    "SMU 거실1 풍량제어 제어시간 간격": Number,
    "SMU 거실1 풍량제어 목표도달 판단 기준값": Number,
    "SMU 거실1 풍량제어 개도 위치 조정값": Number,
    "SMU 거실1 설정 온도": Number,
    "SMU 거실1 온도제어 제어시간 간격": Number,
    "SMU 거실1 현재 개도값": Number,
    "SMU 거실1 FAN RPM": Number,
    "SMU 거실1 현재 풍량": Number,
    "SMU 거실1 실내 온도": Number,
    "SMU 거실1 공급 대기 온도": Number,
    "SMU 거실1 CO2 농도": Number,
    "SMU 거실2 모드": Number,
    "SMU 거실2 목표 개도값": Number,
    "SMU 거실2 설정 풍량": Number,
    "SMU 거실2 풍량제어 제어시간 간격": Number,
    "SMU 거실2 풍량제어 목표도달 판단 기준값": Number,
    "SMU 거실2 풍량제어 개도 위치 조정값": Number,
    "SMU 거실2 설정 온도": Number,
    "SMU 거실2 온도제어 제어시간 간격": Number,
    "SMU 거실2 현재 개도값": Number,
    "SMU 거실2 FAN RPM": Number,
    "SMU 거실2 현재 풍량": Number,
    "SMU 거실2 실내 온도": Number,
    "SMU 거실2 공급 대기 온도": Number,
    "SMU 거실2 CO2 농도": Number
}

const deviceSchema = new Schema({
    ...AHUSchema,
    ...diffuserSchema,
    ...airVolumeMeterSchema,
    ...SMUSchema,
  },{ timestamps: true });

const convertToKST = date => {
    const kstOffset = 9 * 60 * 60 * 1000; // 9 hours in milliseconds
    return new Date(date.getTime() + kstOffset);
};

deviceSchema.pre('save', async function(next) {
    try {
        if (this.isNew || this.isModified()) {
            this.createdAt = convertToKST(this.createdAt);
            this.updatedAt = convertToKST(this.updatedAt);
        }
    } catch (error) {
        next();        
    }
});

deviceSchema.pre('findOneAndUpdate', async function(next) {
    try {
        this._update.updatedAt = convertToKST(new Date());        
    } catch (error) {
        next();        
    }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
