transmitterRegisterArray = [
    {
        slaveId: 11,
        address: 7010,
        length: 4,
        description: '급기 풍량'    
    },
    {
        slaveId: 11,
        address: 7040,
        length: 4,
        description: '급기 온도'    
    },
    {
        slaveId: 11,
        address: 7070,
        length: 4,
        description: '급기 Co2'    
    },
    {
        slaveId: 12,
        address: 7010,
        length: 4,
        description: '급기 풍량'    
    },
    {
        slaveId: 12,
        address: 7040,
        length: 4,
        description: '급기 온도'    
    },
    {
        slaveId: 12,
        address: 7070,
        length: 4,
        description: '급기 Co2'    
    }
]

smdRegisterArray = [
    {
        slaveId: 21,
        address: 0,
        length: 21,
        description: '급기 Room1 SMD'    
    },
    {
        slaveId: 23,
        address: 0,
        length: 21,
        description: '급기 Room2 SMD'    
    }
]

smuRegisterArray = [
    {
        slaveId: 22,
        address: 0,
        length: 21,
        description: '배기 Room1 SMU'    
    },
    {
        slaveId: 24,
        address: 0,
        length: 21,
        description: '배기 Room2 SMU'    
    }
]

smdsmuRegisterDescriptions = {
    holdingRegisterDescriptions: [
            {
                address: 0,
                description: '디퓨저 모드'
            },
            {
                address: 7,
                description: '디퓨저 목표 개도 값'
            },
            {
                address: 10,
                description: '설정 풍량'
            },
            {
                address: 13,
                description: '풍량제어 제어시간 간격'
            },
            {
                address: 14,
                description: '풍량제어 목표도달 판단기준값'
            },
            {
                address: 15,
                description: '풍량제어 디퓨저 개도 위치 조정값'
            },
            {
                address: 20,
                description: '설정온도'
            },
            {
                address: 21,
                description: '온도제어 제어시간 간격'
            }
        ],
    inputRegisterDescriptions: [
            {
                address: 7,
                description: '현재 개도 값'
            },
            {
                address: 8,
                description: '풍량 확인용 FAN 회전 RPM'
            },
            {
                address: 9,
                description: '현재풍량'
            }
        ]
}


powermeterRegisterArray =[
    {
        slaveId: 13,
        address: 0,
        length: 20,
        description: 'Powermetter'    
    },
]

airmonitorDevices = [
    'c90805f1-2f1f-1873-56bf-1205f252cc9d',
    //18돌 룸1 공기질 센서1
    '73876dc8-569a-5de6-66f2-90fd1d89699a',
    //18동 룸1 공기질 센서0
    '07f2922c-4962-108e-bef6-ba6b57e2048e',
    //18동 룸1 공기질 센서2
    '5841eacc-00ec-0b2f-0548-8e7ed888712e',
    //18동 룸2 공기질 센서0
    'b5f96156-10e0-c395-196e-15b90a26c226',
    //18동 룸2 공기질 센서1
    'dc9ac978-8fd4-06f7-e6cd-c7b9f9b401a4',
    //18동 룸2 공기질 센서2
]



const mappingData = {
    "운전 모드": "run_mode",
    "온도 설정값": "set_temp",
    "실내팬 설정값": "set_idf_rpm",
    "실외팬 설정값": "set_odf_rpm",
    "COMP 설정값": "set_comp_rps",
    "EEV 설정값": "set_eev_step",
    "EEV 냉방 초기개도 설정값": "set_eev_startposition_cool",
    "EEV 냉방 기동보류 설정값": "set_eev_startholding_cool",
    "EEV 냉방 과열도 설정값": "set_eev_sh_cool",
    "EEV 냉방 제어주기 설정값": "set_eev_controltime_cool",
    "EEV 냉방 P값 설정값": "set_eev_p_cool",
    "EEV 냉방 I값 설정값": "set_eev_i_cool",
    "EEV 난방 초기개도 설정값": "set_eev_startposition_heat",
    "EEV 난방 기동보류 설정값": "set_eev_startholding_heat",
    "EEV 난방 과열도 설정값": "set_eev_sh_heat",
    "EEV 난방 제어주기 설정값": "set_eev_controltime_heat",
    "EEV 난방 P값 설정값": "set_eev_p_heat",
    "EEV 난방 I값 설정값": "set_eev_i_heat",
    "압축기 제어주기 설정값": "set_comp_controltime",
    "압축기 제어량 설정값": "set_comp_changelimit",
    "댐퍼1": "set_damper1",
    "댐퍼2": "set_damper2",
    "댐퍼3": "set_damper3",
    "댐퍼4": "set_damper4",
    "댐퍼5": "set_damper5",
    "댐퍼6": "set_damper6",
    "댐퍼7": "set_damper7",
    "댐퍼8": "set_damper8",
    "댐퍼9": "set_damper9",
    "댐퍼10": "set_damper10",
    "댐퍼11": "set_damper11",
    "댐퍼12": "set_damper12",
    "실내 PM2.5값": "pm25_in",
    "실내 CO2값": "co2_in",
    "토출정압": "diff_pressure",
    "실내팬 측정값": "idf_realrpm",
    "실외팬 측정값": "odf_realrpm",
    "압축기 설정값": "comp_setrps",
    "압축기 측정값": "comp_realrps",
    "EEV 측정값": "eev_real",
    "외기 온도": "temp_out",
    "토출 온도": "temp_discharge",
    "흡입 온도": "temp_suction",
    "응축 온도": "temp_cond",
    "실내 온도": "temp_in",
    "증발 온도": "temp_eva",
    "직류 전압": "dc_voltage",
    "교류 전류": "ac_current",
    "IMP 온도": "temp_ipm",
    "압축기 에러": "comp_err",
    "압축기 트립": "comp_trip",
    "디퓨저 거실1 급기 설정값": "set_diffuser_supply_living1",
    "디퓨저 거실2 급기 설정값": "set_diffuser_supply_living2",
    "디퓨저 침실1 급기 설정값": "set_diffuser_supply_bedroom1",
    "디퓨저 침실2 급기 설정값": "set_diffuser_supply_bedroom2",
    "디퓨저 침실3 급기 설정값": "set_diffuser_supply_bedroom3",
    "디퓨저 거실1 환기 설정값": "set_diffuser_vent_living1",
    "디퓨저 거실2 환기 설정값": "set_diffuser_vent_living2",
    "디퓨저 침실1 환기 설정값": "set_diffuser_vent_bedroom1",
    "디퓨저 침실2 환기 설정값": "set_diffuser_vent_bedroom2",
    "디퓨저 침실3 환기 설정값": "set_diffuser_vent_bedroom3",
    "디퓨저 거실1 급기 현재값": "diffuser_supply_living1",
    "디퓨저 거실2 급기 현재값": "diffuser_supply_living2",
    "디퓨저 침실1 급기 현재값": "diffuser_supply_bedroom1",
    "디퓨저 침실2 급기 현재값": "diffuser_supply_bedroom2",
    "디퓨저 침실3 급기 현재값": "diffuser_supply_bedroom3",
    "디퓨저 거실1 환기 현재값": "diffuser_vent_living1",
    "디퓨저 거실2 환기 현재값": "diffuser_vent_living2",
    "디퓨저 침실1 환기 현재값": "diffuser_vent_bedroom1",
    "디퓨저 침실2 환기 현재값": "diffuser_vent_bedroom2",
    "디퓨저 침실3 환기 현재값": "diffuser_vent_bedroom3",
    "공조기 급기 풍량": "ahu_supply",
    "공조기 환기 풍량": "ahu_vent",
    "거실1 급기 풍량": "supply_living1",
    "거실1 환기 풍량": "vent_living1",
    "거실2 급기 풍량": "supply_living2",
    "거실2 환기 풍량": "vent_living2",
    "침실1 급기 풍량": "supply_bedroom1",
    "침실1 환기 풍량": "vent_bedroom1",
    "침실2 급기 풍량": "supply_bedroom2",
    "침실2 환기 풍량": "vent_bedroom2",
    "침실3 급기 풍량": "supply_bedroom3",
    "침실3 환기 풍량": "vent_bedroom3",
    "SMU 거실1 모드": "smu_set_mode_living1",
    "SMU 거실1 목표 개도값": "smu_set_position_living1",
    "SMU 거실1 설정 풍량": "smu_set_volume_living1",
    "SMU 거실1 풍량제어 제어시간 간격": "smu_set_volume_controltime_living1",
    "SMU 거실1 풍량제어 목표도달 판단 기준값": "smu_set_volume_ref_living1",
    "SMU 거실1 풍량제어 개도 위치 조정값": "smu_set_volume_diff_living1",
    "SMU 거실1 설정 온도":"smu_set_temp_living1",
    "SMU 거실1 온도제어 제어시간 간격":"smu_set_temp_controltime_living1",
    "SMU 거실1 현재 개도값":"smu_current_position_living1",
    "SMU 거실1 FAN RPM":"smu_rpm_living1",
    "SMU 거실1 현재 풍량":"smu_volume_living1",
    "SMU 거실1 실내 온도":"smu_temp_in_living1",
    "SMU 거실1 공급 대기 온도":"smu_temp_supply_living1",
    "SMU 거실1 CO2 농도":"smu_co2_living1",
    "SMU 거실2 모드": "smu_set_mode_living2",
    "SMU 거실2 목표 개도값": "smu_set_position_living2",
    "SMU 거실2 설정 풍량": "smu_set_volume_living2",
    "SMU 거실2 풍량제어 제어시간 간격": "smu_set_volume_controltime_living2",
    "SMU 거실2 풍량제어 목표도달 판단 기준값": "smu_set_volume_ref_living2",
    "SMU 거실2 풍량제어 개도 위치 조정값": "smu_set_volume_diff_living2",
    "SMU 거실2 설정 온도":"smu_set_temp_living2",
    "SMU 거실2 온도제어 제어시간 간격":"smu_set_temp_controltime_living2",
    "SMU 거실2 현재 개도값":"smu_current_position_living2",
    "SMU 거실2 FAN RPM":"smu_rpm_living2",
    "SMU 거실2 현재 풍량":"smu_volume_living2",
    "SMU 거실2 실내 온도":"smu_temp_in_living2",
    "SMU 거실2 공급 대기 온도":"smu_temp_supply_living2",
    "SMU 거실2 CO2 농도":"smu_co2_living2"
  };


module.exports = { transmitterRegisterArray,smdRegisterArray,smuRegisterArray, smdsmuRegisterDescriptions, powermeterRegisterArray, mappingData,
    BASE_URL: 'https://api.smartthings.com/v1/devices',
    ST_TOKEN: '82350e11-3996-43d3-bd26-02021b40f0b3',
    DEVICE_IDS: airmonitorDevices
 };