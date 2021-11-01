var rtpcrMandatoryCountry = ['United Kingdom'];
var vaccinationMandatoryCountry = ['South Africa', 'Brazil', 'Bangladesh', 'Botswana', 'China', 'Mauritius', 'New Zealand', 'Zimbabwe', 'Albania', 'Andorra', 'Austria', 'Azerbaijan', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'Georgia', 'Greece', 'Iceland', 'Ireland', 'Italy', 'Kazakhstan', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia, the Former Yugoslav Republic of', 'Malta', 'Moldova, Republic of', 'Monaco', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russian Federation', 'San Marino', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Holy See (Vatican City State)'];
var vaccinationAndRTPCRMandatoryCountry = ['United Kingdom', 'Nepal', 'Lebanon', 'France', 'Germany', 'Belarus', 'Armenia', 'Ukraine', 'Belgium', 'Hungary', 'Serbia and Montenegro'];
//$(document).ready(function () {
//    getStateList();
//    getAirportList();
//    getStateMasterList();
//    intiInternationalContactList();

//    setTimeout(function () {
//        $('.datepicker_dob').datepicker({
//            changeMonth: true,
//            changeYear: true,
//            yearRange: "-100:+0",
//            dateFormat: "dd/mm/yy",
//            minDate: "-100Y", maxDate: "-2D"
//        });
//        $('.datepicker_doa').datepicker({
//            dateFormat: "dd/mm/yy",
//            minDate: "0D", maxDate: "2M"
//            //onSelect: function (dateText, inst) {
//            //    if ($(this).attr('id') == 'txtDateOfArrival')
//            //        doChangeDOAPax1();
//            //    else if ($(this).attr('id') == 'txtDateOfArrival2')
//            //        doChangeDOAPax2();
//            //    else if ($(this).attr('id') == 'txtDateOfArrival3')
//            //        doChangeDOAPax3();
//            //    else if ($(this).attr('id') == 'txtDateOfArrival4')
//            //        doChangeDOAPax4();
//            //    else if ($(this).attr('id') == 'txtDateOfArrival5')
//            //        doChangeDOAPax5();
//            //}
//        });
//    }, 2000);

//});


function getStateMasterList() {
    $.ajax({
        url: '/Umbraco/Surface/SelfReporting/GetStateMasterList',
        type: "GET",
        success: function (objResult) {
            var objRes = JSON.parse(objResult);
            if (objRes.status == true && objRes.message == 'success') {
                if (objRes.states.length > 0) {
                    for (var i = 0; i < objRes.states.length; i++) {
                        $('#ddlState').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlState2').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlState3').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlState4').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlState5').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                    }
                }
            }
        },
        error: function (err) {
            //alert(err.statusText);
        }
    });
}

function getStateList() {
    $.ajax({
        url: '/Umbraco/Surface/SelfReporting/GetStateList',
        type: "GET",
        success: function (objResult) {
            var objRes = JSON.parse(objResult);
            if (objRes.status == true && objRes.message == 'success') {
                if (objRes.states.length > 0) {
                    for (var i = 0; i < objRes.states.length; i++) {
                        $('#ddlFinalDestinationState').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlFinalDestinationState2').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlFinalDestinationState3').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlFinalDestinationState4').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                        $('#ddlFinalDestinationState5').append('<option value="' + objRes.states[i].id + '">' + objRes.states[i].state + '</option>');
                    }
                }
            }
        },
        error: function (err) {
            //alert(err.statusText);
        }
    });
}

function getAirportList() {
    $.ajax({
        url: '/Umbraco/Surface/SelfReporting/GetAirportList',
        type: "GET",
        success: function (objResult) {
            var objRes = JSON.parse(objResult);
            if (objRes.status == true && objRes.message == 'success') {
                if (objRes.airports.length > 0) {
                    for (var i = 0; i < objRes.airports.length; i++) {
                        $('#ddlFinalDestinationAirport').append('<option value="' + objRes.airports[i].id + '">' + objRes.airports[i].airport + '</option>');
                        $('#ddlFinalDestinationAirport2').append('<option value="' + objRes.airports[i].id + '">' + objRes.airports[i].airport + '</option>');
                        $('#ddlFinalDestinationAirport3').append('<option value="' + objRes.airports[i].id + '">' + objRes.airports[i].airport + '</option>');
                        $('#ddlFinalDestinationAirport4').append('<option value="' + objRes.airports[i].id + '">' + objRes.airports[i].airport + '</option>');
                        $('#ddlFinalDestinationAirport5').append('<option value="' + objRes.airports[i].id + '">' + objRes.airports[i].airport + '</option>');
                    }
                }
            }
        },
        error: function (err) {
            //alert(err.statusText);
        }
    });
}

function intiInternationalContactList() {
    var inputtxtContactNumberSearch = document.querySelector("#txtContactNumberSearch");
    var contactNOtxtContactNumberSearch = window.intlTelInput(inputtxtContactNumberSearch, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtContactNumber = document.querySelector("#txtContactNumber");
    var contactNOtxtContactNumber = window.intlTelInput(inputtxtContactNumber, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtAlternateContactNumber = document.querySelector("#txtAlternateContactNumber");
    var contactNOtxtAlternateContactNumber = window.intlTelInput(inputtxtAlternateContactNumber, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtContactNumber2 = document.querySelector("#txtContactNumber2");
    var contactNOtxtContactNumber2 = window.intlTelInput(inputtxtContactNumber2, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtAlternateContactNumber2 = document.querySelector("#txtAlternateContactNumber2");
    var contactNOtxtAlternateContactNumber2 = window.intlTelInput(inputtxtAlternateContactNumber2, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtContactNumber3 = document.querySelector("#txtContactNumber3");
    var contactNOtxtContactNumber3 = window.intlTelInput(inputtxtContactNumber3, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtAlternateContactNumber3 = document.querySelector("#txtAlternateContactNumber3");
    var contactNOtxtAlternateContactNumber3 = window.intlTelInput(inputtxtAlternateContactNumber3, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtContactNumber4 = document.querySelector("#txtContactNumber4");
    var contactNOtxtContactNumber4 = window.intlTelInput(inputtxtContactNumber4, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtAlternateContactNumber4 = document.querySelector("#txtAlternateContactNumber4");
    var contactNOtxtAlternateContactNumber4 = window.intlTelInput(inputtxtAlternateContactNumber4, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtContactNumber5 = document.querySelector("#txtContactNumber5");
    var contactNOtxtContactNumber5 = window.intlTelInput(inputtxtContactNumber5, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });

    var inputtxtAlternateContactNumber5 = document.querySelector("#txtAlternateContactNumber5");
    var contactNOtxtAlternateContactNumber5 = window.intlTelInput(inputtxtAlternateContactNumber5, {
        autoPlaceholder: "off",
        formatOnDisplay: false,
        preferredCountries: ['in'],
        separateDialCode: true,
        utilsScript: "/scripts/utils.js",
    });
}

$('#btnPassengerPlus').click(function () {
    var paxCount = parseInt($('#txtPassengersCount').val());
    if (paxCount > 0 && paxCount < 5) {
        paxCount += 1;
        $('#txtPassengersCount').val(paxCount);
        enableCoPassengers(paxCount);
    }
});

$('#btnPassengerMinus').click(function () {
    var paxCount = parseInt($('#txtPassengersCount').val());
    if (paxCount > 1 && paxCount <= 5) {
        paxCount -= 1;
        $('#txtPassengersCount').val(paxCount);
        enableCoPassengers(paxCount);
    }
});

function enableCoPassengers(paxCount) {
    if (paxCount == 1) {
        $('#divCopassengers2').hide();
        $('#divCopassengers3').hide();
        $('#divCopassengers4').hide();
        $('#divCopassengers5').hide();
    }
    else if (paxCount == 2) {
        $('#divCopassengers2').show();
        $('#divCopassengers3').hide();
        $('#divCopassengers4').hide();
        $('#divCopassengers5').hide();
    }
    else if (paxCount == 3) {
        $('#divCopassengers2').show();
        $('#divCopassengers3').show();
        $('#divCopassengers4').hide();
        $('#divCopassengers5').hide();
    }
    else if (paxCount == 4) {
        $('#divCopassengers2').show();
        $('#divCopassengers3').show();
        $('#divCopassengers4').show();
        $('#divCopassengers5').hide();
    }
    else if (paxCount == 5) {
        $('#divCopassengers2').show();
        $('#divCopassengers3').show();
        $('#divCopassengers4').show();
        $('#divCopassengers5').show();
    }

}

function doSave() {
    var name = $('#txtName').val();
    var dateofbirth = $('#txtDOB').val();
    var arrDOB = dateofbirth.split('/');
    var dtDOB = arrDOB[2] + '-' + arrDOB[1] + '-' + arrDOB[0];
    var gender = $('#ddlGender').val();
    var flight_number = $('#txtFlightNumber').val();
    var seat_number = $('#txtSeatNumber').val();
    var pnr_number = $('#txtPNR').val();
    var ddlNationality = $('#ddlNationality').val();
    var passport_number = $('#txtPassportNumber').val();
    var passport_copy = $("#hffuPassportCopy").val();
    var date_of_arrival = $('#txtDateOfArrival').val();
    var arrDOA = date_of_arrival.split('/');
    var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
    var ddlCountryOfOrigin = $('#ddlCountryOfOrigin').val();
    var hffuRTPCRCopy = $('#hffuRTPCRCopy').val();
    var txtRTPCRTestTaken = $('#txtRTPCRTestTaken').val();
    var hffuVaccinationCopy = $('#hffuVaccinationCopy').val();
    var txtVaccinationDate = $('#txtVaccinationDate').val();
    var txtCityOfOrigin = $('#txtCityOfOrigin').val();
    var ddlFinalDestinationAirport = $('#ddlFinalDestinationAirport').val();
    var ddlFinalDestinationAirportText = $('#ddlFinalDestinationAirport option:selected').text();
    var ddlFinalDestinationState = $('#ddlFinalDestinationState').val();
    var ddlFinalDestinationStateText = $('#ddlFinalDestinationState option:selected').text();
    var txtHouseNumber = $('#txtHouseNumber').val();
    var txtStreet = $('#txtStreet').val();
    var txtTehsil = $('#txtTehsil').val();
    var state = $('#ddlState').val();
    var stateText = $('#ddlState option:selected').text();
    var txtDistrictCity = $('#txtDistrictCity').val();
    var pincode = $('#txtPincode').val();
    var contact_number = $('#div_txtContactNumber .iti__selected-dial-code').html() + $('#txtContactNumber').val();
    if ($('#txtContactNumber').val() == '')
        contact_number = '';
    var txtAlternateContactNumber = $('#div_txtAlternateContactNumber .iti__selected-dial-code').html() + $('#txtAlternateContactNumber').val();
    if ($('#txtAlternateContactNumber').val() == '')
        txtAlternateContactNumber = '';
    var emailid = $('#txtEmail').val();
    var FeverSymptoms = '';
    var CoughSymptoms = '';
    var RespiratoryDistressSymptoms = '';
    var DiabetesSuffering = '';
    var HypertensionSuffering = '';
    var BronchialAsthmaSuffering = '';
    var CancerSuffering = '';
    var UndeImmunosuppresiveTherapySuffering = '';
    var PostTransplantPatientsSuffering = '';
    var txtCitiesVisited = $('#txtCitiesVisited').val();
    var passengers_count = parseInt($('#txtPassengersCount').val());
    var ConnectingFlightStatus = '';
    $('[name="radioConnectingFlight"]').each(function () {
        if ($(this).prop('checked')) {
            ConnectingFlightStatus = $(this).val();
        }
    });
    var txtConnectingFlight = $('#txtConnectingFlight').val();

    $('[name="radioFever"]').each(function () {
        if ($(this).prop('checked')) {
            FeverSymptoms = $(this).val();
        }
    });
    $('[name="radioCough"]').each(function () {
        if ($(this).prop('checked')) {
            CoughSymptoms = $(this).val();
        }
    });
    $('[name="radioRespiratoryDistress"]').each(function () {
        if ($(this).prop('checked')) {
            RespiratoryDistressSymptoms = $(this).val();
        }
    });
    $('[name="radioDiabetes"]').each(function () {
        if ($(this).prop('checked')) {
            DiabetesSuffering = $(this).val();
        }
    });
    $('[name="radioHypertension"]').each(function () {
        if ($(this).prop('checked')) {
            HypertensionSuffering = $(this).val();
        }
    });
    $('[name="radioBronchialAsthma"]').each(function () {
        if ($(this).prop('checked')) {
            BronchialAsthmaSuffering = $(this).val();
        }
    });
    $('[name="radioCancer"]').each(function () {
        if ($(this).prop('checked')) {
            CancerSuffering = $(this).val();
        }
    });
    $('[name="radioUndeImmunosuppresiveTherapy"]').each(function () {
        if ($(this).prop('checked')) {
            UndeImmunosuppresiveTherapySuffering = $(this).val();
        }
    });
    $('[name="radioPostTransplantPatients"]').each(function () {
        if ($(this).prop('checked')) {
            PostTransplantPatientsSuffering = $(this).val();
        }
    });

    var dataJSONCoPassengers = "";
    if (parseInt(passengers_count) > 1) {
        for (var i = 0; i < (parseInt(passengers_count) - 1); i++) {
            var paxIndex = i + 2;

            var nameSec = $('#txtName' + paxIndex).val();
            var dateofbirthSec = $('#txtDOB' + paxIndex).val();
            var arrDOBSec = dateofbirthSec.split('/');
            var dtDOBSec = arrDOBSec[2] + '-' + arrDOBSec[1] + '-' + arrDOBSec[0];
            var genderSec = $('#ddlGender' + paxIndex).val();
            var flight_numberSec = $('#txtFlightNumber' + paxIndex).val();
            var seat_numberSec = $('#txtSeatNumber' + paxIndex).val();
            var pnr_numberSec = $('#txtPNR' + paxIndex).val();
            var ddlNationalitySec = $('#ddlNationality' + paxIndex).val();
            var passport_numberSec = $('#txtPassportNumber' + paxIndex).val();
            var passport_copySec = $("#hffuPassportCopy" + paxIndex).val();
            var date_of_arrivalSec = $('#txtDateOfArrival' + paxIndex).val();
            var arrDOASec = date_of_arrivalSec.split('/');
            var dtDOASec = arrDOASec[2] + '-' + arrDOASec[1] + '-' + arrDOASec[0];
            var ddlCountryOfOriginSec = $('#ddlCountryOfOrigin' + paxIndex).val();
            var hffuRTPCRCopySec = $('#hffuRTPCRCopy' + paxIndex).val();
            var txtRTPCRTestTakenSec = $('#txtRTPCRTestTaken' + paxIndex).val();
            var hffuVaccinationCopySec = $('#hffuVaccinationCopy' + paxIndex).val();
            var txtVaccinationDateSec = $('#txtVaccinationDate' + paxIndex).val();
            var txtCityOfOriginSec = $('#txtCityOfOrigin' + paxIndex).val();
            var ddlFinalDestinationAirportSec = $('#ddlFinalDestinationAirport' + paxIndex).val();
            var ddlFinalDestinationAirportTextSec = $('#ddlFinalDestinationAirport' + paxIndex + ' option:selected').text();
            var ddlFinalDestinationStateSec = $('#ddlFinalDestinationState' + paxIndex).val();
            var ddlFinalDestinationStateTextSec = $('#ddlFinalDestinationState' + paxIndex + ' option:selected').text();
            var txtHouseNumberSec = $('#txtHouseNumber' + paxIndex).val();
            var txtStreetSec = $('#txtStreet' + paxIndex).val();
            var txtTehsilSec = $('#txtTehsil' + paxIndex).val();
            var stateSec = $('#ddlState' + paxIndex).val();
            var stateTextSec = $('#ddlState' + paxIndex + ' option:selected').text();
            var txtDistrictCitySec = $('#txtDistrictCity' + paxIndex).val();
            var pincodeSec = $('#txtPincode' + paxIndex).val();
            var contact_numberSec = $('#div_txtContactNumber' + paxIndex + ' .iti__selected-dial-code').html() + $('#txtContactNumber' + paxIndex).val();
            if ($('#txtContactNumber' + paxIndex).val() == '')
                contact_numberSec = '';
            var txtAlternateContactNumberSec = $('#div_txtAlternateContactNumber' + paxIndex + ' .iti__selected-dial-code').html() + $('#txtAlternateContactNumber' + paxIndex).val();
            if ($('#txtAlternateContactNumber' + paxIndex).val() == '')
                txtAlternateContactNumberSec = '';
            var emailidSec = $('#txtEmail' + paxIndex).val();
            var FeverSymptomsSec = '';
            var CoughSymptomsSec = '';
            var RespiratoryDistressSymptomsSec = '';
            var DiabetesSufferingSec = '';
            var HypertensionSufferingSec = '';
            var BronchialAsthmaSufferingSec = '';
            var CancerSufferingSec = '';
            var UndeImmunosuppresiveTherapySufferingSec = '';
            var PostTransplantPatientsSufferingSec = '';
            var txtCitiesVisitedSec = $('#txtCitiesVisited' + paxIndex).val();
            var ConnectingFlightStatusSec = '';
            $('[name="radioConnectingFlight' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    ConnectingFlightStatusSec = $(this).val();
                }
            });
            var txtConnectingFlightSec = $('#txtConnectingFlight' + paxIndex).val();

            $('[name="radioFever' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    FeverSymptomsSec = $(this).val();
                }
            });
            $('[name="radioCough' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    CoughSymptomsSec = $(this).val();
                }
            });
            $('[name="radioRespiratoryDistress' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    RespiratoryDistressSymptomsSec = $(this).val();
                }
            });
            $('[name="radioDiabetes' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    DiabetesSufferingSec = $(this).val();
                }
            });
            $('[name="radioHypertension' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    HypertensionSufferingSec = $(this).val();
                }
            });
            $('[name="radioBronchialAsthma' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    BronchialAsthmaSufferingSec = $(this).val();
                }
            });
            $('[name="radioCancer' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    CancerSufferingSec = $(this).val();
                }
            });
            $('[name="radioUndeImmunosuppresiveTherapy' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    UndeImmunosuppresiveTherapySufferingSec = $(this).val();
                }
            });
            $('[name="radioPostTransplantPatients' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    PostTransplantPatientsSufferingSec = $(this).val();
                }
            });

            dataJSONCoPassengers += '{"name":"' + nameSec + '","dateofbirth":"' + dtDOBSec + '","gender":"' + genderSec + '","flightnumber":"' + flight_numberSec + '","seatnumber":"' + seat_numberSec + '","pnrnumber":"' + pnr_numberSec + '","nationality":"' + ddlNationalitySec + '","passport_number":"' + passport_numberSec + '","passport_copy":"' + passport_copySec + '","date_of_arrival":"' + dtDOASec + '","countryoforigin":"' + ddlCountryOfOriginSec + '","cityoforigin":"' + txtCityOfOriginSec + '","finaldestinationairportid":"' + ddlFinalDestinationAirportSec + '","finaldestinationairport":"' + ddlFinalDestinationAirportTextSec + '","finaldestinationstateid":"' + ddlFinalDestinationStateSec + '","finaldestinationstate":"' + ddlFinalDestinationStateTextSec + '","housenumber":"' + txtHouseNumberSec + '","street":"' + txtStreetSec + '","tehsil":"' + txtTehsilSec + '","state_id":"' + stateSec + '","state":"' + stateTextSec + '","districtcity":"' + txtDistrictCitySec + '","pincode":"' + pincodeSec + '","contactnumber":"' + contact_numberSec + '","alternatecontactnumber":"' + txtAlternateContactNumberSec + '","emailid":"' + emailidSec + '","feversymptoms":"' + FeverSymptomsSec + '","coughsymptoms":"' + CoughSymptomsSec + '","respiratorydistresssymptoms":"' + RespiratoryDistressSymptomsSec + '","sufferingdiabetes":"' + DiabetesSufferingSec + '","sufferinghypertension":"' + HypertensionSufferingSec + '","sufferingbronchialasthma":"' + BronchialAsthmaSufferingSec + '","sufferingcancer":"' + CancerSufferingSec + '","sufferingundeimmunosuppresivetherapy":"' + UndeImmunosuppresiveTherapySufferingSec + '","sufferingposttransplantpatients":"' + PostTransplantPatientsSufferingSec + '","citiescountriesvisited":"' + txtCitiesVisitedSec + '","passengers_count":"' + passengers_count + '","rtpcr_copy":"' + hffuRTPCRCopySec + '","vaccination_certificate":"' + hffuVaccinationCopySec + '","connecting_flight_status":"' + ConnectingFlightStatusSec + '","connecting_flight_number":"' + txtConnectingFlightSec + '","rtpcr_test_date":"' + txtRTPCRTestTakenSec + '","vaccination_date":"' + txtVaccinationDateSec + '"},';
        }
        dataJSONCoPassengers = dataJSONCoPassengers.substring(0, (dataJSONCoPassengers.length - 1));
        dataJSONCoPassengers = "[" + dataJSONCoPassengers + "]";
    }
    else {
        dataJSONCoPassengers = "[]";
    }
    //console.log(JSON.stringify(dataJSONCoPassengers));
    //console.log(dataJSONCoPassengers);

    var dataJSON = {
        "name": name,
        "dateofbirth": dtDOB,
        "gender": gender,
        "flightnumber": flight_number,
        "seatnumber": seat_number,
        "pnrnumber": pnr_number,
        "nationality": ddlNationality,
        "passport_number": passport_number,
        "passport_copy": passport_copy,
        "date_of_arrival": dtDOA,
        "countryoforigin": ddlCountryOfOrigin,
        "cityoforigin": txtCityOfOrigin,
        "finaldestinationairportid": ddlFinalDestinationAirport,
        "finaldestinationairport": ddlFinalDestinationAirportText,
        "finaldestinationstateid": ddlFinalDestinationState,
        "finaldestinationstate": ddlFinalDestinationStateText,
        "housenumber": txtHouseNumber,
        "street": txtStreet,
        "tehsil": txtTehsil,
        "state_id": state,
        "state": stateText,
        "districtcity": txtDistrictCity,
        "pincode": pincode,
        "contactnumber": contact_number,
        "alternatecontactnumber": txtAlternateContactNumber,
        "emailid": emailid,
        "feversymptoms": FeverSymptoms,
        "coughsymptoms": CoughSymptoms,
        "respiratorydistresssymptoms": RespiratoryDistressSymptoms,
        "sufferingdiabetes": DiabetesSuffering,
        "sufferinghypertension": HypertensionSuffering,
        "sufferingbronchialasthma": BronchialAsthmaSuffering,
        "sufferingcancer": CancerSuffering,
        "sufferingundeimmunosuppresivetherapy": UndeImmunosuppresiveTherapySuffering,
        "sufferingposttransplantpatients": PostTransplantPatientsSuffering,
        "citiescountriesvisited": txtCitiesVisited,
        "passengers_count": passengers_count,
        "rtpcr_copy": hffuRTPCRCopy,
        "vaccination_certificate": hffuVaccinationCopy,
        "connecting_flight_status": ConnectingFlightStatus,
        "connecting_flight_number": txtConnectingFlight,
        "rtpcr_test_date": txtRTPCRTestTaken,
        "vaccination_date": txtVaccinationDate,
        "arrsecondarypassengers": JSON.parse(dataJSONCoPassengers)
    };
    //console.log(JSON.stringify(dataJSON));
    console.log(dataJSON);

    $.ajax({
        type: "POST",
        async: true,
        url: "/Umbraco/Surface/SelfReporting/Register",
        data: JSON.stringify(dataJSON),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (objRes) {
            //console.log(objRes);
            var arrObjRes = objRes.split('||');
            //console.log(arrObjRes[0]);
            if (arrObjRes[0] == 'success') {
                window.location.href = '/airsuvidha/apho-thankyou?q=' + arrObjRes[1];
            }
            else {
                bootbox.alert('Error occured, Please try again.');
            }
        },
        error: function (err) {
            //console.log(err);
            if (err.status == 200) {
                //console.log(err.responseText);
                var arrObjRes = err.responseText.split('||');
                if (arrObjRes[0] == 'success') {
                    window.location.href = '/airsuvidha/apho-thankyou?q=' + arrObjRes[1];
                }
                else {
                    //bootbox.alert('Error occured, Please try again.');
                    bootbox.alert(err.responseText);
                    $('#btnSubmitExemptionForm').show();
                    $('#imgSubmitLoader').hide();
                }
            }
        }
    });
}

function doValidateSearch() {
    var txtRegistrationNo = $('#txtRegistrationNo').val();
    var txtContactNumberSearch = $('#txtContactNumberSearch').val();
    var txtPassportNumberSearch = $('#txtPassportNumberSearch').val();
    var txtFlightNumberSearch = $('#txtFlightNumberSearch').val();
    var txtPNRNumberSearch = $('#txtPNRNumberSearch').val();

    if (txtContactNumberSearch == '') {
        $('#txtContactNumberSearch').focus();
        bootbox.alert('Please enter the contact number');
        return false;
    }
    if (/^[0-9]*$/.test(txtContactNumberSearch) == false) {
        $('#txtContactNumberSearch').focus();
        bootbox.alert('Please enter only numeric values in contact number');
        return false;
    }
    if (txtContactNumberSearch.length < 8) {
        $('#txtContactNumberSearch').focus();
        bootbox.alert('Please enter valid contact number');
        return false;
    }
    if (txtPassportNumberSearch == '') {
        $('#txtPassportNumberSearch').focus();
        bootbox.alert('Please enter your passport number');
        return false;
    }
    if (txtPassportNumberSearch.length > 10) {
        $('#txtPassportNumberSearch').focus();
        bootbox.alert('Please enter valid 10 digit passport number');
        return false;
    }
    if (/^[a-zA-Z0-9]*$/.test(txtPassportNumberSearch) == false) {
        bootbox.alert('Please enter valid passport number');
        $('#txtPassportNumberSearch').focus();
        return false;
    }
    if (txtFlightNumberSearch == '') {
        $('#txtFlightNumberSearch').focus();
        bootbox.alert('Please enter flight no. / tail number');
        return false;
    }
    var flightNoRegExpression = /^[a-zA-Z0-9]{4,6}$/;
    if (!flightNoRegExpression.test(txtFlightNumberSearch)) {
        $('#txtFlightNumberSearch').focus();
        bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
        return false;
    }
    //if (txtPNRNumberSearch == '') {
    //    $('#txtPNRNumberSearch').focus();
    //    bootbox.alert('Please enter PNR number');
    //    return false;
    //}


    if (txtRegistrationNo != '') {
        var dataJSON = {
            "registration_no": txtRegistrationNo,
            "contact_number": $('#div_txtContactNumberSearch .iti__selected-dial-code').html() + txtContactNumberSearch,
            "passport_number": txtPassportNumberSearch,
            "flight_number": txtFlightNumberSearch,
            "pnr_number": txtPNRNumberSearch
        };

        $.ajax({
            type: "POST",
            async: true,
            url: "/Umbraco/Surface/SelfReporting/Validate",
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (objRes) {
                //console.log(objRes);
                var objResult = objRes;//JSON.parse(objRes);
                if (objResult.status == true && objResult.message == 'success') {
                    //console.log(objResult.data);
                    //console.log(objResult.data.Table);
                    if (objResult.data.Table.length > 0) {
                        var userData = objResult.data.Table[0];
                        //console.log(userData);
                        $('#txtName').val(userData.name);
                        var tempDOB = userData.dateofbirth;
                        var arrTempDOB = tempDOB.split('T');
                        var arrDOB = arrTempDOB[0].split('-');
                        $('#txtDOB').val(arrDOB[2] + '/' + arrDOB[1] + '/' + arrDOB[0]);
                        $('#txtFlightNumber').val(userData.flight_number);
                        $('#txtSeatNumber').val();
                        $('#txtPNR').val(userData.pnr_number);
                        $('#ddlNationality').val();
                        $('#txtPassportNumber').val(userData.passport_number);
                        var tempDOA = userData.date_of_journey;
                        var arrTempDOA = tempDOA.split('T');
                        var arrDOA = arrTempDOA[0].split('-');
                        $('#txtDateOfArrival').val(arrDOA[2] + '/' + arrDOA[1] + '/' + arrDOA[0]);
                        $('#ddlCountryOfOrigin').val(userData.country_of_departure);
                        $('#txtCityOfOrigin').val();
                        $('#ddlFinalDestinationAirport').val();
                        $('#ddlFinalDestinationState').val();
                        $('#txtHouseNumber').val();
                        $('#txtStreet').val(userData.address);
                        $('#txtTehsil').val();
                        $('#ddlState option').text(userData.state);
                        $('#txtDistrictCity').val(userData.city);
                        $('#txtPincode').val(userData.pincode);
                        $('#txtContactNumber').val(txtContactNumberSearch);
                        $('#txtAlternateContactNumber').val();
                        $('#txtEmail').val(userData.emailid);

                        var paxCount = userData.passengers_count;
                        if (paxCount > 1) {
                            $('#txtPassengersCount').val(paxCount);
                            enableCoPassengers(paxCount);
                            paxCount = paxCount - 1;

                            if (objResult.datasecondary.Table.length > 0) {
                                for (var i = 0; i < objResult.datasecondary.Table.length; i++) {
                                    var userDataSec = objResult.datasecondary.Table[i];
                                    var paxIndex = i + 2;

                                    $('#txtName' + paxIndex).val(userDataSec.name);
                                    var tempDOBSec = userData.dateofbirth;
                                    var arrTempDOBSec = tempDOBSec.split('T');
                                    var arrDOBSec = arrTempDOBSec[0].split('-');
                                    $('#txtDOB' + paxIndex).val(arrDOBSec[2] + '/' + arrDOBSec[1] + '/' + arrDOBSec[0]);
                                    $('#txtEmail' + paxIndex).val(userDataSec.emailid);
                                    $('#txtPassportNumber' + paxIndex).val(userDataSec.passport_number);
                                    $('#txtContactNumber' + paxIndex).val(userDataSec.contact_number);
                                }
                            }
                        }
                    }
                }
                else {
                    $('#txtFlightNumber').val(txtFlightNumberSearch);
                    $('#txtPassportNumber').val(txtPassportNumberSearch);
                    $('#txtPNR').val(txtPNRNumberSearch);
                    $('#txtContactNumber').val(txtContactNumberSearch);
                }
                $(".crn-div").hide();
                $(".apho-div").show();
            },
            error: function (err) {
                //console.log(err);
            }
        });
    }
    else {
        $('#txtFlightNumber').val(txtFlightNumberSearch);
        $('#txtPassportNumber').val(txtPassportNumberSearch);
        $('#txtPNR').val(txtPNRNumberSearch);
        $('#txtContactNumber').val(txtContactNumberSearch);
        $(".crn-div").hide();
        $(".apho-div").show();
    }


}

function doValidatePrimary() {
    //console.log('code: ' + $('#div_txtContactNumber .iti__selected-dial-code').html());
    var name = $('#txtName').val();
    var dateofbirth = $('#txtDOB').val();
    var gender = $('#ddlGender').val();
    var flight_number = $('#txtFlightNumber').val();
    var seat_number = $('#txtSeatNumber').val();
    var pnr_number = $('#txtPNR').val();
    var ddlNationality = $('#ddlNationality').val();
    var passport_number = $('#txtPassportNumber').val();
    var passport_copy = $("#fuPassportCopy").get(0);
    var date_of_arrival = $('#txtDateOfArrival').val();
    var arrDOA = date_of_arrival.split('/');
    var dtDOA = new Date(arrDOA[2], arrDOA[1], arrDOA[0]);
    var ddlCountryOfOrigin = $('#ddlCountryOfOrigin').val();
    var txtRTPCRTestTaken = $('#txtRTPCRTestTaken').val();
    var txtCityOfOrigin = $('#txtCityOfOrigin').val();
    var ddlFinalDestinationAirport = $('#ddlFinalDestinationAirport').val();
    var ddlFinalDestinationState = $('#ddlFinalDestinationState').val();
    var txtHouseNumber = $('#txtHouseNumber').val();
    var txtStreet = $('#txtStreet').val();
    var txtTehsil = $('#txtTehsil').val();
    var state = $('#ddlState').val();
    var txtDistrictCity = $('#txtDistrictCity').val();
    var pincode = $('#txtPincode').val();
    var contact_number = $('#txtContactNumber').val();
    var txtAlternateContactNumber = $('#txtAlternateContactNumber').val();
    var emailid = $('#txtEmail').val();
    var ConnectingFlightStatus = '';
    $('[name="radioConnectingFlight"]').each(function () {
        if ($(this).prop('checked')) {
            ConnectingFlightStatus = $(this).val();
        }
    });
    var txtConnectingFlight = $('#txtConnectingFlight').val();

    var FeverSymptoms = '';
    var CoughSymptoms = '';
    var RespiratoryDistressSymptoms = '';
    var DiabetesSuffering = '';
    var HypertensionSuffering = '';
    var BronchialAsthmaSuffering = '';
    var CancerSuffering = '';
    var UndeImmunosuppresiveTherapySuffering = '';
    var PostTransplantPatientsSuffering = '';
    var txtCitiesVisited = $('#txtCitiesVisited').val();

    var passengers_count = parseInt($('#txtPassengersCount').val());

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (name == '') {
        $('#txtName').focus();
        bootbox.alert('Please enter your full name');
        return false;
    }
    if (/^[a-zA-Z ]*$/.test(name) == false) {
        $('#txtName').focus();
        bootbox.alert('Please enter valid name');
        return false;
    }
    if (dateofbirth == '') {
        $('#txtDOB').focus();
        bootbox.alert('Please select the date of birth');
        return false;
    }
    var arrDOB = dateofbirth.split('/');
    var dtDOB = new Date(arrDOB[2], parseInt(arrDOB[1]) - 1, arrDOB[0]);
    var dtDOBStart = new Date(1920, 0, 1);
    var today = new Date();
    today.setDate(today.getDate() - 1);
    if (dtDOB < dtDOBStart) {
        $('#txtDOB').val('');
        $('#txtDOB').focus();
        bootbox.alert('Please enter valid date of birth');
        return false;
    }
    if (dtDOB > today) {
        $('#txtDOB').val('');
        $('#txtDOB').focus();
        bootbox.alert('Please enter valid date of birth');
        return false;
    }
    if (gender == '0') {
        $('#ddlGender').focus();
        bootbox.alert('Please select gender');
        return false;
    }
    if (flight_number == '') {
        $('#txtFlightNumber').focus();
        bootbox.alert('Please enter flight no. / tail number');
        return false;
    }
    //var flightNoRegExpression = /^[a-zA-Z0-9]{2}[0-9]{3,4}$/;
    var flightNoRegExpression = /^[a-zA-Z0-9]{4,6}$/;
    if (!flightNoRegExpression.test(flight_number)) {
        $('#txtFlightNumber').focus();
        bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
        return false;
    }
    if (seat_number == '') {
        $('#txtSeatNumber').focus();
        bootbox.alert('Please enter seat number');
        return false;
    }
    //if (pnr_number == '') {
    //    $('#txtPNR').focus();
    //    bootbox.alert('Please enter PNR number');
    //    return false;
    //}
    if (ddlNationality == '0') {
        $('#ddlNationality').focus();
        bootbox.alert('Please select nationality');
        return false;
    }
    if (passport_number == '') {
        $('#txtPassportNumber').focus();
        bootbox.alert('Please enter your passport number');
        return false;
    }
    if (passport_number.length > 10) {
        $('#txtPassportNumber').focus();
        bootbox.alert('Please enter valid 10 digit passport number');
        return false;
    }
    if (/^[a-zA-Z0-9]*$/.test(passport_number) == false) {
        bootbox.alert('Please enter valid passport number');
        $('#txtPassportNumber').focus();
        return false;
    }
    if (date_of_arrival == '') {
        $('#txtDateOfArrival').focus();
        bootbox.alert('Please select date of arrival');
        return false;
    }
    if (ddlCountryOfOrigin == '0') {
        $('#ddlCountryOfOrigin').focus();
        bootbox.alert('Please select country of origin');
        return false;
    }

    var dtValidationFrom = new Date(2021, 02, 23);
    if (dtDOA >= dtValidationFrom) {
        if (ConnectingFlightStatus == '') {
            $('#ddlCountryOfOrigin').focus();
            bootbox.alert('Please select "are you taking a connecting Domestic flight"');
            return false;
        }
        if (ConnectingFlightStatus == 'Yes') {
            if (txtConnectingFlight == '') {
                $('#txtConnectingFlight').focus();
                bootbox.alert('Please enter domestic connecting flight number');
                return false;
            }
            if (!flightNoRegExpression.test(txtConnectingFlight)) {
                $('#txtConnectingFlight').focus();
                bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
                return false;
            }
        }
        //if (jQuery.inArray(ddlCountryOfOrigin, rtpcrMandatoryCountry) >= 0) {
        var rtpcrCopy = $("#fuRTPCRCopy").get(0);
        if (rtpcrCopy.files.length == 0) {
            $("#fuRTPCRCopy").focus();
            bootbox.alert('Please upload RT-PCR negative certificate');
            return false;
        }
        //}
        if (txtRTPCRTestTaken == '') {
            $('#txtRTPCRTestTaken').focus();
            bootbox.alert('Please select the date of RT-PCR test taken');
            return false;
        }
    }
    else {
        if (jQuery.inArray(ddlCountryOfOrigin, rtpcrMandatoryCountry) >= 0) {
            var rtpcrCopy = $("#fuRTPCRCopy").get(0);
            if (rtpcrCopy.files.length == 0) {
                $("#fuRTPCRCopy").focus();
                bootbox.alert('Please upload RT-PCR negative certificate');
                return false;
            }
        }
    }


    if (txtCityOfOrigin == '') {
        $('#txtCityOfOrigin').focus();
        bootbox.alert('Please enter city of origin');
        return false;
    }
    if (ddlFinalDestinationAirport == '0') {
        $('#ddlFinalDestinationAirport').focus();
        bootbox.alert('Please select First Airport of Entry');
        return false;
    }
    if (ddlFinalDestinationState == '0') {
        $('#ddlFinalDestinationState').focus();
        bootbox.alert('Please select First Airport of Entry - State/Union Territory');
        return false;
    }
    if (txtHouseNumber == '') {
        $('#txtHouseNumber').focus();
        bootbox.alert('Please enter house number');
        return false;
    }
    if (txtStreet == '') {
        $('#txtStreet').focus();
        bootbox.alert('Please enter street/vilage');
        return false;
    }
    //if (txtTehsil == '') {
    //    $('#txtTehsil').focus();
    //    bootbox.alert('Please enter tehsil');
    //    return false;
    //}
    if (state == '0') {
        $('#ddlState').focus();
        bootbox.alert('Please select State/Union Territories');
        return false;
    }
    if (txtDistrictCity == '') {
        $('#txtDistrictCity').focus();
        bootbox.alert('Please enter District/City');
        return false;
    }
    if (pincode == '') {
        $('#txtPincode').focus();
        bootbox.alert('Please enter pincode');
        return false;
    }
    if (/^[0-9]*$/.test(pincode) == false) {
        $('#txtPincode').focus();
        bootbox.alert('Please enter valid pincode');
        return false;
    }
    if (pincode.length != 6) {
        $('#txtPincode').focus();
        bootbox.alert('Please enter 6 digit pincode');
        return false;
    }
    if (contact_number == '') {
        $('#txtContactNumber').focus();
        bootbox.alert('Please enter the mobile number');
        return false;
    }
    if (/^[0-9]*$/.test(contact_number) == false) {
        $('#txtContactNumber').focus();
        bootbox.alert('Please enter only numeric values in mobile number');
        return false;
    }
    if (contact_number.length < 10 || contact_number.length > 15) {
        $('#txtContactNumber').focus();
        bootbox.alert('Please enter valid mobile number');
        return false;
    }
    //if (txtAlternateContactNumber == '') {
    //    $('#txtAlternateContactNumber').focus();
    //    bootbox.alert('Please enter the alternate contact number');
    //    return false;
    //}
    if (txtAlternateContactNumber != '') {
        if (/^[0-9]*$/.test(txtAlternateContactNumber) == false) {
            $('#txtAlternateContactNumber').focus();
            bootbox.alert('Please enter only numeric values in alternate contact number');
            return false;
        }
        if (txtAlternateContactNumber.length < 10 || txtAlternateContactNumber.length > 15) {
            $('#txtAlternateContactNumber').focus();
            bootbox.alert('Please enter valid alternate contact number');
            return false;
        }
    }
    if (emailid == '') {
        $('#txtEmail').focus();
        bootbox.alert('Please enter email address');
        return false;
    }
    if (!emailReg.test(emailid)) {
        $('#txtEmail').focus();
        bootbox.alert('Please enter valid email address');
        return false;
    }

    $('[name="radioFever"]').each(function () {
        if ($(this).prop('checked')) {
            FeverSymptoms = $(this).val();
        }
    });
    if (FeverSymptoms == '') {
        $('[name="radioFever"]').focus();
        bootbox.alert('Please select any option in fever');
        return false;
    }
    $('[name="radioCough"]').each(function () {
        if ($(this).prop('checked')) {
            CoughSymptoms = $(this).val();
        }
    });
    if (CoughSymptoms == '') {
        $('[name="radioCough"]').focus();
        bootbox.alert('Please select any option in cough');
        return false;
    }
    $('[name="radioRespiratoryDistress"]').each(function () {
        if ($(this).prop('checked')) {
            RespiratoryDistressSymptoms = $(this).val();
        }
    });
    if (RespiratoryDistressSymptoms == '') {
        $('[name="radioRespiratoryDistress"]').focus();
        bootbox.alert('Please select any option in respiratory distress');
        return false;
    }
    $('[name="radioDiabetes"]').each(function () {
        if ($(this).prop('checked')) {
            DiabetesSuffering = $(this).val();
        }
    });
    if (DiabetesSuffering == '') {
        $('[name="radioDiabetes"]').focus();
        bootbox.alert('Please select any option in diabetes');
        return false;
    }
    $('[name="radioHypertension"]').each(function () {
        if ($(this).prop('checked')) {
            HypertensionSuffering = $(this).val();
        }
    });
    if (HypertensionSuffering == '') {
        $('[name="radioHypertension"]').focus();
        bootbox.alert('Please select any option in hypertension');
        return false;
    }
    $('[name="radioBronchialAsthma"]').each(function () {
        if ($(this).prop('checked')) {
            BronchialAsthmaSuffering = $(this).val();
        }
    });
    if (BronchialAsthmaSuffering == '') {
        $('[name="radioBronchialAsthma"]').focus();
        bootbox.alert('Please select any option in bronchial asthma');
        return false;
    }
    $('[name="radioCancer"]').each(function () {
        if ($(this).prop('checked')) {
            CancerSuffering = $(this).val();
        }
    });
    if (CancerSuffering == '') {
        $('[name="radioCancer"]').focus();
        bootbox.alert('Please select any option in cancer');
        return false;
    }
    $('[name="radioUndeImmunosuppresiveTherapy"]').each(function () {
        if ($(this).prop('checked')) {
            UndeImmunosuppresiveTherapySuffering = $(this).val();
        }
    });
    if (UndeImmunosuppresiveTherapySuffering == '') {
        $('[name="radioUndeImmunosuppresiveTherapy"]').focus();
        bootbox.alert('Please select any option in unde immunosuppresive therapy');
        return false;
    }
    $('[name="radioPostTransplantPatients"]').each(function () {
        if ($(this).prop('checked')) {
            PostTransplantPatientsSuffering = $(this).val();
        }
    });
    if (PostTransplantPatientsSuffering == '') {
        $('[name="radioPostTransplantPatients"]').focus();
        bootbox.alert('Please select any option in post transplant patients');
        return false;
    }
    if (txtCitiesVisited == '') {
        $('#txtCitiesVisited').focus();
        bootbox.alert('Please enter the details of the Cities / Countries visited in last 14 days');
        return false;
    }
    if (!$('#hfPincode').val()) {
        $('#txtPincode').val('');
        $('#txtPincode').focus();
        bootbox.alert('Please enter valid pincode');
        return false;
    }

    if (passengers_count > 1) {
        if (passengers_count == 2) {
            var validateSec2 = doValidteSecondary(2);
            //console.log('validateSec2: ' + validateSec2);
            if (!validateSec2) {
                return false;
            }

        }
        else if (passengers_count == 3) {
            var validateSec2 = doValidteSecondary(2);
            if (!validateSec2) {
                return false;
            }
            var validateSec3 = doValidteSecondary(3);
            if (!validateSec3) {
                return false;
            }
        }
        else if (passengers_count == 4) {
            var validateSec2 = doValidteSecondary(2);
            if (!validateSec2) {
                return false;
            }
            var validateSec3 = doValidteSecondary(3);
            if (!validateSec3) {
                return false;
            }
            var validateSec4 = doValidteSecondary(4);
            if (!validateSec4) {
                return false;
            }
        }
        else if (passengers_count == 5) {
            var validateSec2 = doValidteSecondary(2);
            if (!validateSec2) {
                return false;
            }
            var validateSec3 = doValidteSecondary(3);
            if (!validateSec3) {
                return false;
            }
            var validateSec4 = doValidteSecondary(4);
            if (!validateSec4) {
                return false;
            }
            var validateSec5 = doValidteSecondary(5);
            if (!validateSec5) {
                return false;
            }
        }
    }

    if (!$('#cbxGuidelines').prop('checked')) {
        bootbox.alert('Please accept the disclaimer');
        return false;
    }
    if (!$('#cbxInfoCorrect').prop('checked')) {
        bootbox.alert('Please accept the disclaimer');
        return false;
    }
    if (!$('#cbxQuarantine').prop('checked')) {
        bootbox.alert('Please accept the disclaimer');
        return false;
    }

    //RTPCR FILE UPLOAD
    for (var i = 0; i < passengers_count; i++) {
        var ddlID = 'ddlCountryOfOrigin';
        var fuID = 'fuRTPCRCopy';
        var ppID = 'txtPassportNumber';
        var rtpcrUploadStatus = '';
        ddlID += ((i != 0) ? (i + 1) : '');
        fuID += ((i != 0) ? (i + 1) : '');
        ppID += ((i != 0) ? (i + 1) : '');
        //if (jQuery.inArray($('#' + ddlID).val(), rtpcrMandatoryCountry) >= 0) {
        rtpcrUploadStatus = '';
        var rtpcrCopy = $("#" + fuID).get(0);
        if (rtpcrCopy.files.length > 0) {
            rtpcrUploadStatus = fileUploadRTPCRCopy(fuID, '', ppID);
            console.log('rtpcrUploadStatus: ' + rtpcrUploadStatus)
            if (rtpcrUploadStatus == 'false') {
                $('#btnSubmitExemptionForm').show();
                $('#imgSubmitLoader').hide();
                bootbox.alert('Error while uploading your RT-PCR negative certificate');
                return false;
            }
        }
        //}
    }

    //VACCINATION CERTIFICATAE UPLOAD
    for (var i = 0; i < passengers_count; i++) {
        var fuID = 'fuVaccinationCopy';
        var ppID = 'txtPassportNumber';
        var VaccinationCertificateUploadStatus = '';
        fuID += ((i != 0) ? (i + 1) : '');
        ppID += ((i != 0) ? (i + 1) : '');
        VaccinationCertificateUploadStatus = '';
        var VaccinationCopy = $("#" + fuID).get(0);
        if (VaccinationCopy.files.length > 0) {
            VaccinationCertificateUploadStatus = fileUploadRTPCRCopy(fuID, '', ppID);
            console.log('VaccinationCertificateUploadStatus: ' + VaccinationCertificateUploadStatus)
            if (VaccinationCertificateUploadStatus == 'false') {
                $('#btnSubmitExemptionForm').show();
                $('#imgSubmitLoader').hide();
                bootbox.alert('Error while uploading your vaccination certificate');
                return false;
            }
        }
    }

    if (passport_copy.files.length == 1) {
        fileUploadPrimaryPassportCopy('fuPassportCopy', ' in passport copy');
    }
    else {
        $('#btnSubmitExemptionForm').hide();
        $('#imgSubmitLoader').show();
        doSave();
    }
}

function doValidteSecondary(paxIndex) {
    var returnValue = '';
    var name = $('#txtName' + paxIndex).val();
    var dateofbirth = $('#txtDOB' + paxIndex).val();
    var gender = $('#ddlGender' + paxIndex).val();
    var flight_number = $('#txtFlightNumber' + paxIndex).val();
    var seat_number = $('#txtSeatNumber' + paxIndex).val();
    var pnr_number = $('#txtPNR' + paxIndex).val();
    var ddlNationality = $('#ddlNationality' + paxIndex).val();
    var passport_number = $('#txtPassportNumber' + paxIndex).val();
    var passport_copy = $("#fuPassportCopy" + paxIndex).get(0);
    var date_of_arrival = $('#txtDateOfArrival' + paxIndex).val();
    var arrDOA = date_of_arrival.split('/');
    var dtDOA = new Date(arrDOA[2], arrDOA[1], arrDOA[0]);
    var ddlCountryOfOrigin = $('#ddlCountryOfOrigin' + paxIndex).val();
    var txtRTPCRTestTaken = $('#txtRTPCRTestTaken' + paxIndex).val();
    var txtCityOfOrigin = $('#txtCityOfOrigin' + paxIndex).val();
    var ddlFinalDestinationAirport = $('#ddlFinalDestinationAirport' + paxIndex).val();
    var ddlFinalDestinationState = $('#ddlFinalDestinationState' + paxIndex).val();
    var txtHouseNumber = $('#txtHouseNumber' + paxIndex).val();
    var txtStreet = $('#txtStreet' + paxIndex).val();
    var txtTehsil = $('#txtTehsil' + paxIndex).val();
    var state = $('#ddlState' + paxIndex).val();
    var txtDistrictCity = $('#txtDistrictCity' + paxIndex).val();
    var pincode = $('#txtPincode' + paxIndex).val();
    var contact_number = $('#txtContactNumber' + paxIndex).val();
    var txtAlternateContactNumber = $('#txtAlternateContactNumber' + paxIndex).val();
    var emailid = $('#txtEmail' + paxIndex).val();
    var ConnectingFlightStatus = '';
    $('[name="radioConnectingFlight' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            ConnectingFlightStatus = $(this).val();
        }
    });
    var txtConnectingFlight = $('#txtConnectingFlight' + paxIndex).val();

    var FeverSymptoms = '';
    var CoughSymptoms = '';
    var RespiratoryDistressSymptoms = '';
    var DiabetesSuffering = '';
    var HypertensionSuffering = '';
    var BronchialAsthmaSuffering = '';
    var CancerSuffering = '';
    var UndeImmunosuppresiveTherapySuffering = '';
    var PostTransplantPatientsSuffering = '';
    var txtCitiesVisited = $('#txtCitiesVisited' + paxIndex).val();

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (name == '') {
        $('#txtName' + paxIndex).focus();
        bootbox.alert('Please enter your full name');
        returnValue = 'false';
        return false;
    }
    if (/^[a-zA-Z ]*$/.test(name) == false) {
        $('#txtName' + paxIndex).focus();
        bootbox.alert('Please enter valid name');
        returnValue = 'false';
        return false;
    }
    if (dateofbirth == '') {
        $('#txtDOB' + paxIndex).focus();
        bootbox.alert('Please select the date of birth');
        returnValue = 'false';
        return false;
    }
    var arrDOB = dateofbirth.split('/');
    var dtDOB = new Date(arrDOB[2], parseInt(arrDOB[1]) - 1, arrDOB[0]);
    var dtDOBStart = new Date(1920, 0, 1);
    var today = new Date();
    today.setDate(today.getDate() - 1);
    if (dtDOB < dtDOBStart) {
        $('#txtDOB' + paxIndex).val('');
        $('#txtDOB' + paxIndex).focus();
        bootbox.alert('Please enter valid date of birth');
        returnValue = 'false';
        return false;
    }
    if (dtDOB > today) {
        $('#txtDOB' + paxIndex).val('');
        $('#txtDOB' + paxIndex).focus();
        bootbox.alert('Please enter valid date of birth');
        returnValue = 'false';
        return false;
    }
    if (gender == '0') {
        $('#ddlGender' + paxIndex).focus();
        bootbox.alert('Please select gender');
        return false;
    }
    if (flight_number == '') {
        $('#txtFlightNumber' + paxIndex).focus();
        bootbox.alert('Please enter flight no. / tail number');
        returnValue = 'false';
        return false;
    }
    var flightNoRegExpression = /^[a-zA-Z0-9]{4,6}$/;
    if (!flightNoRegExpression.test(flight_number)) {
        $('#txtFlightNumber' + paxIndex).focus();
        bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
        returnValue = 'false';
        return false;
    }
    if (seat_number == '') {
        $('#txtSeatNumber' + paxIndex).focus();
        bootbox.alert('Please enter seat number');
        returnValue = 'false';
        return false;
    }
    //if (pnr_number == '') {
    //    $('#txtPNR' + paxIndex).focus();
    //    bootbox.alert('Please enter PNR number');
    //    returnValue = 'false';
    //    return false;
    //}
    if (ddlNationality == '0') {
        $('#ddlNationality' + paxIndex).focus();
        bootbox.alert('Please select nationality');
        returnValue = 'false';
        return false;
    }
    if (passport_number == '') {
        $('#txtPassportNumber' + paxIndex).focus();
        bootbox.alert('Please enter passport number');
        returnValue = 'false';
        return false;
    }
    if (passport_number.length > 10) {
        $('#txtPassportNumber' + paxIndex).focus();
        bootbox.alert('Please enter valid 10 digit passport number');
        return false;
    }
    if (/^[a-zA-Z0-9]*$/.test(passport_number) == false) {
        bootbox.alert('Please enter valid passport number');
        $('#txtPassportNumber' + paxIndex).focus();
        return false;
    }
    if (date_of_arrival == '') {
        $('#txtDateOfArrival' + paxIndex).focus();
        bootbox.alert('Please select date of arrival');
        returnValue = 'false';
        return false;
    }
    if (ddlCountryOfOrigin == '0') {
        $('#ddlCountryOfOrigin' + paxIndex).focus();
        bootbox.alert('Please select country of origin');
        returnValue = 'false';
        return false;
    }
    var dtValidationFrom = new Date(2021, 02, 23);
    if (dtDOA >= dtValidationFrom) {
        if (ConnectingFlightStatus == '') {
            $('#ddlCountryOfOrigin' + paxIndex).focus();
            bootbox.alert('Please select "are you taking a connecting Domestic flight"');
            returnValue = 'false';
            return false;
        }
        if (ConnectingFlightStatus == 'Yes') {
            if (txtConnectingFlight == '') {
                $('#txtConnectingFlight' + paxIndex).focus();
                bootbox.alert('Please enter domestic connecting flight number');
                returnValue = 'false';
                return false;
            }
            if (!flightNoRegExpression.test(txtConnectingFlight)) {
                $('#txtConnectingFlight' + paxIndex).focus();
                bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
                returnValue = 'false';
                return false;
            }
        }
        //if (jQuery.inArray(ddlCountryOfOrigin, rtpcrMandatoryCountry) >= 0) {
        var rtpcrCopy = $("#fuRTPCRCopy" + paxIndex).get(0);
        if (rtpcrCopy.files.length == 0) {
            $("#fuRTPCRCopy" + paxIndex).focus();
            bootbox.alert('Please upload RT-PCR negative certificate');
            returnValue = 'false';
            return false;
        }
        //}
        if (txtRTPCRTestTaken == '') {
            $('#txtRTPCRTestTaken' + paxIndex).focus();
            bootbox.alert('Please select the date of RT-PCR test taken');
            returnValue = 'false';
            return false;
        }
    }
    else {
        if (jQuery.inArray(ddlCountryOfOrigin, rtpcrMandatoryCountry) >= 0) {
            var rtpcrCopy = $("#fuRTPCRCopy" + paxIndex).get(0);
            if (rtpcrCopy.files.length == 0) {
                $("#fuRTPCRCopy" + paxIndex).focus();
                bootbox.alert('Please upload RT-PCR negative certificate');
                returnValue = 'false';
                return false;
            }
        }
    }


    if (txtCityOfOrigin == '') {
        $('#txtCityOfOrigin' + paxIndex).focus();
        bootbox.alert('Please enter city of origin');
        returnValue = 'false';
        return false;
    }
    if (ddlFinalDestinationAirport == '0') {
        $('#ddlFinalDestinationAirport' + paxIndex).focus();
        bootbox.alert('Please select First Airport of Entry');
        returnValue = 'false';
        return false;
    }
    if (ddlFinalDestinationState == '0') {
        $('#ddlFinalDestinationState' + paxIndex).focus();
        bootbox.alert('Please select First Airport of Entry - State/Union Territory');
        returnValue = 'false';
        return false;
    }
    if (txtHouseNumber == '') {
        $('#txtHouseNumber' + paxIndex).focus();
        bootbox.alert('Please enter house number');
        returnValue = 'false';
        return false;
    }
    if (txtStreet == '') {
        $('#txtStreet' + paxIndex).focus();
        bootbox.alert('Please enter street/vilage');
        returnValue = 'false';
        return false;
    }
    //if (txtTehsil == '') {
    //    $('#txtTehsil' + paxIndex).focus();
    //    bootbox.alert('Please enter tehsil');
    //    returnValue = 'false';
    //    return false;
    //}
    if (state == '0') {
        $('#ddlState' + paxIndex).focus();
        bootbox.alert('Please select State/Union Territories');
        returnValue = 'false';
        return false;
    }
    if (txtDistrictCity == '') {
        $('#txtDistrictCity' + paxIndex).focus();
        bootbox.alert('Please enter District/City');
        returnValue = 'false';
        return false;
    }
    if (pincode == '') {
        $('#txtPincode' + paxIndex).focus();
        bootbox.alert('Please enter pincode');
        returnValue = 'false';
        return false;
    }
    if (/^[0-9]*$/.test(pincode) == false) {
        $('#txtPincode' + paxIndex).focus();
        bootbox.alert('Please enter valid pincode');
        returnValue = 'false';
        return false;
    }
    if (pincode.length != 6) {
        $('#txtPincode' + paxIndex).focus();
        bootbox.alert('Please enter 6 digit pincode');
        return false;
    }
    if (contact_number == '') {
        $('#txtContactNumber' + paxIndex).focus();
        bootbox.alert('Please enter the mobile number');
        returnValue = 'false';
        return false;
    }
    if (/^[0-9]*$/.test(contact_number) == false) {
        $('#txtContactNumber' + paxIndex).focus();
        bootbox.alert('Please enter only numeric values in mobile number');
        returnValue = 'false';
        return false;
    }
    if (contact_number.length < 10 || contact_number.length > 15) {
        $('#txtContactNumber' + paxIndex).focus();
        bootbox.alert('Please enter valid mobile number');
        returnValue = 'false';
        return false;
    }
    //if (txtAlternateContactNumber == '') {
    //    $('#txtAlternateContactNumber' + paxIndex).focus();
    //    bootbox.alert('Please enter the alternate contact number');
    //    returnValue = 'false';
    //    return false;
    //}
    if (txtAlternateContactNumber != '') {
        if (/^[0-9]*$/.test(txtAlternateContactNumber) == false) {
            $('#txtAlternateContactNumber' + paxIndex).focus();
            bootbox.alert('Please enter only numeric values in alternate contact number');
            returnValue = 'false';
            return false;
        }
        if (txtAlternateContactNumber.length < 10 || txtAlternateContactNumber.length > 15) {
            $('#txtAlternateContactNumber' + paxIndex).focus();
            bootbox.alert('Please enter valid alternate contact number');
            returnValue = 'false';
            return false;
        }
    }
    if (emailid == '') {
        $('#txtEmail' + paxIndex).focus();
        bootbox.alert('Please enter email address');
        returnValue = 'false';
        return false;
    }
    if (!emailReg.test(emailid)) {
        $('#txtEmail' + paxIndex).focus();
        bootbox.alert('Please enter valid email address');
        returnValue = 'false';
        return false;
    }

    $('[name="radioFever' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            FeverSymptoms = $(this).val();
        }
    });
    if (FeverSymptoms == '') {
        $('[name="radioFever' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in fever');
        returnValue = 'false';
        return false;
    }
    $('[name="radioCough' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            CoughSymptoms = $(this).val();
        }
    });
    if (CoughSymptoms == '') {
        $('[name="radioCough' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in cough');
        returnValue = 'false';
        return false;
    }
    $('[name="radioRespiratoryDistress' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            RespiratoryDistressSymptoms = $(this).val();
        }
    });
    if (RespiratoryDistressSymptoms == '') {
        $('[name="radioRespiratoryDistress' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in respiratory distress');
        returnValue = 'false';
        return false;
    }
    $('[name="radioDiabetes' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            DiabetesSuffering = $(this).val();
        }
    });
    if (DiabetesSuffering == '') {
        $('[name="radioDiabetes' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in diabetes');
        returnValue = 'false';
        return false;
    }
    $('[name="radioHypertension' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            HypertensionSuffering = $(this).val();
        }
    });
    if (HypertensionSuffering == '') {
        $('[name="radioHypertension' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in hypertension');
        returnValue = 'false';
        return false;
    }
    $('[name="radioBronchialAsthma' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            BronchialAsthmaSuffering = $(this).val();
        }
    });
    if (BronchialAsthmaSuffering == '') {
        $('[name="radioBronchialAsthma' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in bronchial asthma');
        returnValue = 'false';
        return false;
    }
    $('[name="radioCancer' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            CancerSuffering = $(this).val();
        }
    });
    if (CancerSuffering == '') {
        $('[name="radioCancer' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in cancer');
        returnValue = 'false';
        return false;
    }
    $('[name="radioUndeImmunosuppresiveTherapy' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            UndeImmunosuppresiveTherapySuffering = $(this).val();
        }
    });
    if (UndeImmunosuppresiveTherapySuffering == '') {
        $('[name="radioUndeImmunosuppresiveTherapy' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in unde immunosuppresive therapy');
        returnValue = 'false';
        return false;
    }
    $('[name="radioPostTransplantPatients' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            PostTransplantPatientsSuffering = $(this).val();
        }
    });
    if (PostTransplantPatientsSuffering == '') {
        $('[name="radioPostTransplantPatients' + paxIndex + '"]').focus();
        bootbox.alert('Please select any option in post transplant patients');
        returnValue = 'false';
        return false;
    }
    if (txtCitiesVisited == '') {
        $('#txtCitiesVisited' + paxIndex).focus();
        bootbox.alert('Please enter the details of the Cities / Countries visited in last 14 days');
        returnValue = 'false';
        return false;
    }
    if (!$('#hfPincode' + paxIndex).val()) {
        $('#txtPincode' + paxIndex).val('');
        $('#txtPincode' + paxIndex).focus();
        bootbox.alert('Please enter valid pincode');
        return false;
    }
    else {
        returnValue = 'true';
        return true;
    }
    return returnValue;
}

function fileUploadPrimaryPassportCopy(fileType, message) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;

        // Create FormData object
        var fileData = new FormData();
        fileData.append(files[0].name, files[0]);
        var rand = $('#txtPassportNumber').val();//Math.random().toString().replace('.', '');
        if (rand == '')
            rand = Math.random().toString().replace('.', '');
        fileData.append('randno', rand);
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/UploadFiles',
            type: "POST",
            async: true,
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            data: fileData,
            beforeSend: function () {
                //console.log('hide buttons');
                $('#btnSubmitExemptionForm').hide();
                $('#imgSubmitLoader').show();
            },
            success: function (objResult) {
                //console.log(objResult);
                //alert(objResult);
                var objRes = JSON.parse(objResult);
                if (objRes.status == true) {
                    //console.log('File Name: ' + objRes.file);
                    $('#hf' + fileType).val(objRes.file);
                    var passengers_count = parseInt($('#txtPassengersCount').val());
                    if (passengers_count > 1) {
                        fileUploadPassportCopy2('fuPassportCopy2', ' in passenger 2 passport copy');
                    }
                    else {
                        doSave();
                    }
                }
                else {
                    bootbox.alert(objRes.message);
                    returnValue = "false";
                    return false;
                }
            },
            error: function (err) {
                bootbox.alert(err.statusText);
                returnValue = "false";
                return false;
            }
        });

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}

function fileUploadPassportCopy2(fileType, message) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;

        // Create FormData object
        var fileData = new FormData();

        fileData.append(files[0].name, files[0]);
        var rand = $('#txtPassportNumber2').val();//Math.random().toString().replace('.', '');
        if (rand == '')
            rand = Math.random().toString().replace('.', '');
        fileData.append('randno', rand);
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/UploadFiles',
            type: "POST",
            async: true,
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            data: fileData,
            success: function (objResult) {
                //console.log(objResult);
                //alert(objResult);
                var objRes = JSON.parse(objResult);
                if (objRes.status == true) {
                    //console.log('File Name: ' + objRes.file);
                    $('#hf' + fileType).val(objRes.file);

                    var passengers_count = parseInt($('#txtPassengersCount').val());
                    if (passengers_count > 2) {
                        fileUploadPassportCopy3('fuPassportCopy3', ' in passenger 3 passport copy');
                    }
                    else {
                        doSave();
                    }

                    //returnValue = "true";
                    //return true;
                }
                else {
                    bootbox.alert(objRes.message);
                    returnValue = "false";
                    return false;
                }
            },
            error: function (err) {
                bootbox.alert(err.statusText);
                returnValue = "false";
                return false;
            }
        });

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}

function fileUploadPassportCopy3(fileType, message) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;

        // Create FormData object
        var fileData = new FormData();

        fileData.append(files[0].name, files[0]);
        var rand = $('#txtPassportNumber3').val();//Math.random().toString().replace('.', '');
        if (rand == '')
            rand = Math.random().toString().replace('.', '');
        fileData.append('randno', rand);
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/UploadFiles',
            type: "POST",
            async: true,
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            data: fileData,
            success: function (objResult) {
                //console.log(objResult);
                //alert(objResult);
                var objRes = JSON.parse(objResult);
                if (objRes.status == true) {
                    //console.log('File Name: ' + objRes.file);
                    $('#hf' + fileType).val(objRes.file);

                    var passengers_count = parseInt($('#txtPassengersCount').val());
                    if (passengers_count > 3) {
                        fileUploadPassportCopy4('fuPassportCopy4', ' in passenger 4 passport copy');
                    }
                    else {
                        doSave();
                    }

                    //returnValue = "true";
                    //return true;
                }
                else {
                    bootbox.alert(objRes.message);
                    returnValue = "false";
                    return false;
                }
            },
            error: function (err) {
                bootbox.alert(err.statusText);
                returnValue = "false";
                return false;
            }
        });

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}

function fileUploadPassportCopy4(fileType, message) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;

        // Create FormData object
        var fileData = new FormData();

        fileData.append(files[0].name, files[0]);
        var rand = $('#txtPassportNumber4').val();//Math.random().toString().replace('.', '');
        if (rand == '')
            rand = Math.random().toString().replace('.', '');
        fileData.append('randno', rand);
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/UploadFiles',
            type: "POST",
            async: true,
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            data: fileData,
            success: function (objResult) {
                //console.log(objResult);
                //alert(objResult);
                var objRes = JSON.parse(objResult);
                if (objRes.status == true) {
                    //console.log('File Name: ' + objRes.file);
                    $('#hf' + fileType).val(objRes.file);

                    var passengers_count = parseInt($('#txtPassengersCount').val());
                    if (passengers_count == 5) {
                        fileUploadPassportCopy5('fuPassportCopy5', ' in passenger 5 passport copy');
                    }
                    else {
                        doSave();
                    }

                    //returnValue = "true";
                    //return true;
                }
                else {
                    bootbox.alert(objRes.message);
                    returnValue = "false";
                    return false;
                }
            },
            error: function (err) {
                bootbox.alert(err.statusText);
                returnValue = "false";
                return false;
            }
        });

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}

function fileUploadPassportCopy5(fileType, message) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;

        // Create FormData object
        var fileData = new FormData();

        fileData.append(files[0].name, files[0]);
        var rand = $('#txtPassportNumber5').val();//Math.random().toString().replace('.', '');
        if (rand == '')
            rand = Math.random().toString().replace('.', '');
        fileData.append('randno', rand);
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/UploadFiles',
            type: "POST",
            async: true,
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            data: fileData,
            success: function (objResult) {
                //console.log(objResult);
                //alert(objResult);
                var objRes = JSON.parse(objResult);
                if (objRes.status == true) {
                    //console.log('File Name: ' + objRes.file);
                    $('#hf' + fileType).val(objRes.file);

                    doSave();

                    //returnValue = "true";
                    //return true;
                }
                else {
                    bootbox.alert(objRes.message);
                    returnValue = "false";
                    return false;
                }
            },
            error: function (err) {
                bootbox.alert(err.statusText);
                returnValue = "false";
                return false;
            }
        });

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}

function validatePassengerFile(fileType, message) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;
        if (files.length == 0) {
            $("#" + fileType).focus();
            $('#' + fileType).val('');
            bootbox.alert('please select the file' + message);
            returnValue = "false";
            return false;
        }
        if (files.length > 1) {
            $("#" + fileType).focus();
            $('#' + fileType).val('');
            bootbox.alert('please select only one file' + message);
            returnValue = "false";
            return false;
        }

        //var allowed_extensions = new Array("jpg", "jpeg", "pdf");
        var allowed_extensions = new Array("pdf");//new Array("jpg", "jpeg", "pdf");

        // Create FormData object
        var fileData = new FormData();

        // Looping over all files and add it to FormData object
        //for (var i = 0; i < files.length; i++) {
        const fsize = files[0].size;
        const file = Math.round((fsize / 1024));
        // The size of the file.
        if (file >= 1024) {
            $("#" + fileType).focus();
            $('#' + fileType).val('');
            bootbox.alert("File too Big, please select a file less than 1MB" + message);
            returnValue = "false";
            return false;
        } else if (file < 10) {
            $("#" + fileType).focus();
            $('#' + fileType).val('');
            bootbox.alert("File too small, please select a file greater than 10KB" + message);
            returnValue = "false";
            return false;
        }
        else {
            var file_name = files[0].name;
            if (/^[a-zA-Z0-9-_.]*$/.test(file_name) == false) {
                $("#" + fileType).focus();
                $('#' + fileType).val('');
                bootbox.alert('File name with any special characters and space are not permitted. Only hyphen and underscore permitted' + message);
                returnValue = "false";
                return false;
            }

            var file_extension = files[0].name.split('.').pop().toLowerCase();
            var fileStatus = false;
            //console.log('file_extension: ' + file_extension);
            for (var j = 0; j <= allowed_extensions.length; j++) {
                if (allowed_extensions[j] == file_extension) {
                    fileStatus = true;
                }
            }
            if (fileStatus) {
                returnValue = "true";
                return true;
            }
            else {
                $("#" + fileType).focus();
                $('#' + fileType).val('');
                bootbox.alert('Invalid file format' + message);
                returnValue = "false";
                return false;
            }
        }
        //}

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}

$('input[type=file]').change(function () {
    //console.log($(this).attr("id"));
    var controlID = $(this).attr("id");
    var fileResponse = validatePassengerFile(controlID, '');
    //console.log(fileResponse);

    if (fileResponse == true) {
        $('#div_' + controlID).hide();
        $('#divIcon_' + controlID).show();
        var fileUpload = $('#' + controlID).get(0);
        var files = fileUpload.files;
        var filename = files[0].name;
        var file_extension = filename.split('.').pop().toLowerCase();
        //console.log(file_extension);
        $('#divIcon_' + controlID + ' > img').attr('src', '/images/' + file_extension + '.png?q=new');
        $('#divIcon_' + controlID + ' > p').text(filename);
    }
    else {
        $('#' + controlID).val('');
    }
});

function removeFile(controlID) {
    $('#div_' + controlID).show();
    $('#divIcon_' + controlID).hide();
    $('#divIcon_' + controlID + ' > p').text('');
    $('#' + controlID).val('');
}

$('.FirstAirportEntry').change(function () {
    var stateDropDown = '';
    var airportSelected = $(this).val();
    if ($(this).attr("id") == 'ddlFinalDestinationAirport') {
        stateDropDown = 'ddlFinalDestinationState';
    }
    else if ($(this).attr("id") == 'ddlFinalDestinationAirport2') {
        stateDropDown = 'ddlFinalDestinationState2';
    }
    else if ($(this).attr("id") == 'ddlFinalDestinationAirport3') {
        stateDropDown = 'ddlFinalDestinationState3';
    }
    else if ($(this).attr("id") == 'ddlFinalDestinationAirport4') {
        stateDropDown = 'ddlFinalDestinationState4';
    }
    else if ($(this).attr("id") == 'ddlFinalDestinationAirport5') {
        stateDropDown = 'ddlFinalDestinationState5';
    }
    getStateListByAirport(airportSelected, stateDropDown);
});



function getStateListByAirport(airportSelected, stateDropDown) {
    $.ajax({
        url: '/Umbraco/Surface/SelfReporting/GetStateByAirport',
        data: { 'airportID': airportSelected },
        type: "GET",
        success: function (objResult) {
            var objRes = JSON.parse(objResult);
            if (objRes.status == true && objRes.message == 'success') {
                if (objRes.states.length > 0) {
                    $('#' + stateDropDown).val(objRes.states[0].id);
                }
            }
            else {
                $('#' + stateDropDown).val(0);
            }
        },
        error: function (err) {
            //alert(err.statusText);
        }
    });
}

function onChangeCountryOfOrigin(countryOfOriginControl, DateOfArrivalControl) {
    var txtDateOfArrival = $('#' + DateOfArrivalControl).val();
    if (txtDateOfArrival != '') {
        var arrDOA = txtDateOfArrival.split('/');
        var dtDOA = new Date(arrDOA[2], parseInt(arrDOA[1]) - 1, arrDOA[0], 0, 0, 0);
        var dtDOAStart = new Date(2021, 9, 25, 0, 0, 0);
        if (dtDOA >= dtDOAStart) {
            var CountryOfOriginSelected = $('#' + countryOfOriginControl).val();
            if (jQuery.inArray(CountryOfOriginSelected, vaccinationAndRTPCRMandatoryCountry) >= 0) {
                $('#modalVaccinationMandatory').modal('show');
            }
            if (jQuery.inArray(CountryOfOriginSelected, vaccinationMandatoryCountry) >= 0) {
                $('#modalRTPCRMandatory').modal('show');
            }
        }
    }
}

$('.CountryOfOrigin').change(function () {
    if ($(this).attr("id") == 'ddlCountryOfOrigin') {
        onChangeCountryOfOrigin('ddlCountryOfOrigin', 'txtDateOfArrival');
    }
    else if ($(this).attr("id") == 'ddlCountryOfOrigin2') {
        onChangeCountryOfOrigin('ddlCountryOfOrigin2', 'txtDateOfArrival2');
    }
    else if ($(this).attr("id") == 'ddlCountryOfOrigin3') {
        onChangeCountryOfOrigin('ddlCountryOfOrigin3', 'txtDateOfArrival3');
    }
    else if ($(this).attr("id") == 'ddlCountryOfOrigin4') {
        onChangeCountryOfOrigin('ddlCountryOfOrigin4', 'txtDateOfArrival4');
    }
    else if ($(this).attr("id") == 'ddlCountryOfOrigin5') {
        onChangeCountryOfOrigin('ddlCountryOfOrigin5', 'txtDateOfArrival5');
    }

    //var txtDateOfArrival = $('#txtDateOfArrival').val();
    //if (txtDateOfArrival != '') {
    //    var arrDOA = txtDateOfArrival.split('/');
    //    var dtDOA = new Date(arrDOA[2], parseInt(arrDOA[1]) - 1, arrDOA[0], 0, 0, 0);
    //    var dtDOAStart = new Date(2021, 9, 25, 0, 0, 0);
    //    if (dtDOA >= dtDOAStart) {
    //        var CountryOfOriginSelected = $(this).val();
    //        if ($(this).attr("id") == 'ddlCountryOfOrigin') {
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationAndRTPCRMandatoryCountry) >= 0) {
    //                $('#modalVaccinationMandatory').modal('show');
    //            }
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationMandatoryCountry) >= 0) {
    //                $('#modalRTPCRMandatory').modal('show');
    //            }
    //        }
    //        else if ($(this).attr("id") == 'ddlCountryOfOrigin2') {
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationAndRTPCRMandatoryCountry) >= 0) {
    //                $('#modalVaccinationMandatory').modal('show');
    //            }
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationMandatoryCountry) >= 0) {
    //                $('#modalRTPCRMandatory').modal('show');
    //            }
    //        }
    //        else if ($(this).attr("id") == 'ddlCountryOfOrigin3') {
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationAndRTPCRMandatoryCountry) >= 0) {
    //                $('#modalVaccinationMandatory').modal('show');
    //            }
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationMandatoryCountry) >= 0) {
    //                $('#modalRTPCRMandatory').modal('show');
    //            }
    //        }
    //        else if ($(this).attr("id") == 'ddlCountryOfOrigin4') {
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationAndRTPCRMandatoryCountry) >= 0) {
    //                $('#modalVaccinationMandatory').modal('show');
    //            }
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationMandatoryCountry) >= 0) {
    //                $('#modalRTPCRMandatory').modal('show');
    //            }
    //        }
    //        else if ($(this).attr("id") == 'ddlCountryOfOrigin5') {
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationAndRTPCRMandatoryCountry) >= 0) {
    //                $('#modalVaccinationMandatory').modal('show');
    //            }
    //            if (jQuery.inArray(CountryOfOriginSelected, vaccinationMandatoryCountry) >= 0) {
    //                $('#modalRTPCRMandatory').modal('show');
    //            }
    //        }
    //    }
    //}
});


function fileUploadRTPCRCopy(fileType, message, ppID) {
    var returnValue = "";
    // Checking whether FormData is available in browser  
    if (window.FormData !== undefined) {

        var fileUpload = $("#" + fileType).get(0);
        var files = fileUpload.files;

        // Create FormData object
        var fileData = new FormData();

        fileData.append(files[0].name, files[0]);
        var rand = $('#' + ppID).val();//Math.random().toString().replace('.', '');
        if (rand == '')
            rand = Math.random().toString().replace('.', '');
        fileData.append('randno', rand);
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/UploadFiles',
            type: "POST",
            async: false,
            contentType: false, // Not to set any content header  
            processData: false, // Not to process data  
            data: fileData,
            beforeSend: function () {
                //console.log('hide buttons');
                $('#btnSubmitExemptionForm').hide();
                $('#imgSubmitLoader').show();
            },
            success: function (objResult) {
                //console.log(objResult);
                //alert(objResult);
                var objRes = JSON.parse(objResult);
                if (objRes.status == true) {
                    //console.log('File Name: ' + objRes.file);
                    $('#hf' + fileType).val(objRes.file);
                    returnValue = "true";
                    return true;
                    //var passengers_count = parseInt($('#txtPassengersCount').val());
                    //if (passengers_count > 1) {
                    //    fileUploadPassportCopy2('fuPassportCopy2', ' in passenger 2 passport copy');
                    //}
                    //else {
                    //    doSave();
                    //}
                }
                else {
                    bootbox.alert(objRes.message);
                    returnValue = "false";
                    return false;
                }
            },
            error: function (err) {
                bootbox.alert(err.statusText);
                returnValue = "false";
                return false;
            }
        });

        // Adding one more key to FormData object  
        //fileData.append('username', 'Manas');


    } else {
        bootbox.alert("FormData is not supported.");
        returnValue = "false";
        return false;
    }

    return returnValue;
}


$('[name="radioConnectingFlight"]').change(function () {
    if ($(this).prop('checked')) {
        if ($(this).val() == 'Yes') {
            $('#divConnectingFlight').show();
        } else {
            $('#divConnectingFlight').hide();
        }
    }
});
$('[name="radioConnectingFlight2"]').change(function () {
    if ($(this).prop('checked')) {
        if ($(this).val() == 'Yes') {
            $('#divConnectingFlight2').show();
        } else {
            $('#divConnectingFlight2').hide();
        }
    }
});
$('[name="radioConnectingFlight3"]').change(function () {
    if ($(this).prop('checked')) {
        if ($(this).val() == 'Yes') {
            $('#divConnectingFlight3').show();
        } else {
            $('#divConnectingFlight3').hide();
        }
    }
});
$('[name="radioConnectingFlight4"]').change(function () {
    if ($(this).prop('checked')) {
        if ($(this).val() == 'Yes') {
            $('#divConnectingFlight4').show();
        } else {
            $('#divConnectingFlight4').hide();
        }
    }
});
$('[name="radioConnectingFlight5"]').change(function () {
    if ($(this).prop('checked')) {
        if ($(this).val() == 'Yes') {
            $('#divConnectingFlight5').show();
        } else {
            $('#divConnectingFlight5').hide();
        }
    }
});

//$('#txtFlightNumber').change(function () {
//    doChangeDOAPax1();
//});
//$('#txtFlightNumber2').change(function () {
//    doChangeDOAPax2();
//});
//$('#txtFlightNumber3').change(function () {
//    doChangeDOAPax3();
//});
//$('#txtFlightNumber4').change(function () {
//    doChangeDOAPax4();
//});
//$('#txtFlightNumber5').change(function () {
//    doChangeDOAPax5();
//});
//$('#txtPassportNumber').change(function () {
//    doChangeDOAPax1();
//});
//$('#txtPassportNumber2').change(function () {
//    doChangeDOAPax2();
//});
//$('#txtPassportNumber3').change(function () {
//    doChangeDOAPax3();
//});
//$('#txtPassportNumber4').change(function () {
//    doChangeDOAPax4();
//});
//$('#txtPassportNumber5').change(function () {
//    doChangeDOAPax5();
//});

//function doChangeDOAPax1() {
//    var flight_number = $('#txtFlightNumber').val();
//    var passport_number = $('#txtPassportNumber').val();
//    var date_of_arrival = $('#txtDateOfArrival').val();

//    if (flight_number != '' && passport_number != '' && date_of_arrival != '') {
//        var arrDOA = date_of_arrival.split('/');
//        var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
//        var dataJSON = {
//            "passport_number": passport_number,
//            "flightnumber": flight_number,
//            "date_of_arrival": dtDOA
//        }
//        var paxStatus = doValidateDetailsExists(dataJSON);
//        if (paxStatus == true) {
//            $('#txtDateOfArrival').val('');
//            bootbox.alert('You have already filled up the form to travel by ' + flight_number + ' arriving on ' + date_of_arrival + ' with the passport number as ' + passport_number + '.');
//            return false;
//        }
//    }
//}
//function doChangeDOAPax2() {
//    var flight_number = $('#txtFlightNumber2').val();
//    var passport_number = $('#txtPassportNumber2').val();
//    var date_of_arrival = $('#txtDateOfArrival2').val();

//    if (flight_number != '' && passport_number != '' && date_of_arrival != '') {
//        var arrDOA = date_of_arrival.split('/');
//        var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
//        var dataJSON = {
//            "passport_number": passport_number,
//            "flightnumber": flight_number,
//            "date_of_arrival": dtDOA
//        }
//        var paxStatus = doValidateDetailsExists(dataJSON);
//        if (paxStatus == true) {
//            $('#txtDateOfArrival2').val('');
//            bootbox.alert('You have already filled up the form to travel by ' + flight_number + ' arriving on ' + date_of_arrival + ' with the passport number as ' + passport_number + '.');
//            return false;
//        }
//    }
//}
//function doChangeDOAPax3() {
//    var flight_number = $('#txtFlightNumber3').val();
//    var passport_number = $('#txtPassportNumber3').val();
//    var date_of_arrival = $('#txtDateOfArrival3').val();

//    if (flight_number != '' && passport_number != '' && date_of_arrival != '') {
//        var arrDOA = date_of_arrival.split('/');
//        var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
//        var dataJSON = {
//            "passport_number": passport_number,
//            "flightnumber": flight_number,
//            "date_of_arrival": dtDOA
//        }
//        var paxStatus = doValidateDetailsExists(dataJSON);
//        if (paxStatus == true) {
//            $('#txtDateOfArrival3').val('');
//            bootbox.alert('You have already filled up the form to travel by ' + flight_number + ' arriving on ' + date_of_arrival + ' with the passport number as ' + passport_number + '.');
//            return false;
//        }
//    }
//}
//function doChangeDOAPax4() {
//    var flight_number = $('#txtFlightNumber4').val();
//    var passport_number = $('#txtPassportNumber4').val();
//    var date_of_arrival = $('#txtDateOfArrival4').val();

//    if (flight_number != '' && passport_number != '' && date_of_arrival != '') {
//        var arrDOA = date_of_arrival.split('/');
//        var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
//        var dataJSON = {
//            "passport_number": passport_number,
//            "flightnumber": flight_number,
//            "date_of_arrival": dtDOA
//        }
//        var paxStatus = doValidateDetailsExists(dataJSON);
//        if (paxStatus == true) {
//            $('#txtDateOfArrival4').val('');
//            bootbox.alert('You have already filled up the form to travel by ' + flight_number + ' arriving on ' + date_of_arrival + ' with the passport number as ' + passport_number + '.');
//            return false;
//        }
//    }
//}
//function doChangeDOAPax5() {
//    var flight_number = $('#txtFlightNumber5').val();
//    var passport_number = $('#txtPassportNumber5').val();
//    var date_of_arrival = $('#txtDateOfArrival5').val();

//    if (flight_number != '' && passport_number != '' && date_of_arrival != '') {
//        var arrDOA = date_of_arrival.split('/');
//        var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
//        var dataJSON = {
//            "passport_number": passport_number,
//            "flightnumber": flight_number,
//            "date_of_arrival": dtDOA
//        }
//        var paxStatus = doValidateDetailsExists(dataJSON);
//        if (paxStatus == true) {
//            $('#txtDateOfArrival5').val('');
//            bootbox.alert('You have already filled up the form to travel by ' + flight_number + ' arriving on ' + date_of_arrival + ' with the passport number as ' + passport_number + '.');
//            return false;
//        }
//    }
//}
//function doValidateDetailsExists(dataJSON) {
//    var paxStatus;
//    $.ajax({
//        type: "POST",
//        async: false,
//        url: "/Umbraco/Surface/SelfReporting/ValidateIfExists",
//        data: JSON.stringify(dataJSON),
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        success: function (objRes) {
//            //console.log('Success block');
//            //console.log(objRes);
//            paxStatus = objRes.status;
//        },
//        error: function (err) {
//            //console.log('Error block');
//            //console.log(err);
//            paxStatus = false;
//        }
//    });
//    return paxStatus;
//}

function doValidateEditPrimary() {
    var flight_number = $('#txtFlightNumber').val();
    var seat_number = $('#txtSeatNumber').val();
    var date_of_arrival = $('#txtDateOfArrival').val();
    var date_of_arrival_Edit = $('#txtDateOfArrivalEdit').val();
    var ddlCountryOfOrigin = $('#ddlCountryOfOrigin').val();
    var ConnectingFlightStatus = '';
    $('[name="radioConnectingFlight"]').each(function () {
        if ($(this).prop('checked')) {
            ConnectingFlightStatus = $(this).val();
        }
    });
    var txtConnectingFlight = $('#txtConnectingFlight').val();
    var txtCityOfOrigin = $('#txtCityOfOrigin').val();
    var passengers_count = parseInt($('#txtPassengersCount').val());

    if (flight_number == '') {
        $('#txtFlightNumber').focus();
        bootbox.alert('Please enter flight no. / tail number');
        return false;
    }
    var flightNoRegExpression = /^[a-zA-Z0-9]{4,6}$/;
    if (!flightNoRegExpression.test(flight_number)) {
        $('#txtFlightNumber').focus();
        bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
        return false;
    }
    if (seat_number == '') {
        $('#txtSeatNumber').focus();
        bootbox.alert('Please enter seat number');
        return false;
    }
    if (date_of_arrival == '') {
        $('#txtDateOfArrival').focus();
        bootbox.alert('Please select date of arrival');
        return false;
    }
    if (ddlCountryOfOrigin == '0') {
        $('#ddlCountryOfOrigin').focus();
        bootbox.alert('Please select country of departure');
        return false;
    }
    if (ConnectingFlightStatus == '') {
        $('#ddlCountryOfOrigin').focus();
        bootbox.alert('Please select "are you taking a connecting Domestic flight"');
        return false;
    }
    if (ConnectingFlightStatus == 'Yes') {
        if (txtConnectingFlight == '') {
            $('#txtConnectingFlight').focus();
            bootbox.alert('Please enter domestic connecting flight number');
            return false;
        }
        if (!flightNoRegExpression.test(txtConnectingFlight)) {
            $('#txtConnectingFlight').focus();
            bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
            return false;
        }
    }
    if (date_of_arrival_Edit != date_of_arrival) {
        var rtpcrCopy = $("#fuRTPCRCopy").get(0);
        if (rtpcrCopy.files.length == 0) {
            $("#fuRTPCRCopy").focus();
            bootbox.alert('Please upload RT-PCR negative certificate');
            return false;
        }
    }
    if (txtCityOfOrigin == '') {
        $('#txtCityOfOrigin').focus();
        bootbox.alert('Please enter city of departure');
        return false;
    }
    if (passengers_count > 1) {
        if (passengers_count == 2) {
            var validateSec2 = doValidateEditSecondary(2);
            if (!validateSec2) {
                return false;
            }
        }
        else if (passengers_count == 3) {
            var validateSec2 = doValidateEditSecondary(2);
            if (!validateSec2) {
                return false;
            }
            var validateSec3 = doValidateEditSecondary(3);
            if (!validateSec3) {
                return false;
            }
        }
        else if (passengers_count == 4) {
            var validateSec2 = doValidateEditSecondary(2);
            if (!validateSec2) {
                return false;
            }
            var validateSec3 = doValidateEditSecondary(3);
            if (!validateSec3) {
                return false;
            }
            var validateSec4 = doValidateEditSecondary(4);
            if (!validateSec4) {
                return false;
            }
        }
        else if (passengers_count == 5) {
            var validateSec2 = doValidateEditSecondary(2);
            if (!validateSec2) {
                return false;
            }
            var validateSec3 = doValidateEditSecondary(3);
            if (!validateSec3) {
                return false;
            }
            var validateSec4 = doValidateEditSecondary(4);
            if (!validateSec4) {
                return false;
            }
            var validateSec5 = doValidateEditSecondary(5);
            if (!validateSec5) {
                return false;
            }
        }
    }

    if (!$('#cbxGuidelines').prop('checked')) {
        bootbox.alert('Please accept the disclaimer');
        return false;
    }
    if (!$('#cbxInfoCorrect').prop('checked')) {
        bootbox.alert('Please accept the disclaimer');
        return false;
    }
    if (!$('#cbxQuarantine').prop('checked')) {
        bootbox.alert('Please accept the disclaimer');
        return false;
    }

    $('#btnSubmitExemptionFormEdit').hide();
    $('#imgSubmitLoaderEdit').show();

    //RTPCR UPLOAD
    for (var i = 0; i < passengers_count; i++) {
        var doaID = 'txtDateOfArrival';
        var doaeID = 'txtDateOfArrivalEdit';
        var fuID = 'fuRTPCRCopy';
        var ppID = 'txtPassportNumber';
        var rtpcrUploadStatus = '';
        doaID += ((i != 0) ? (i + 1) : '');
        doaeID += ((i != 0) ? (i + 1) : '');
        fuID += ((i != 0) ? (i + 1) : '');
        ppID += ((i != 0) ? (i + 1) : '');
        rtpcrUploadStatus = '';
        if ($('#' + doaID).val() != $('#' + doaeID).val()) {
            var rtpcrCopy = $("#" + fuID).get(0);
            if (rtpcrCopy.files.length > 0) {
                rtpcrUploadStatus = fileUploadRTPCRCopy(fuID, '', ppID);
                console.log('rtpcrUploadStatus: ' + rtpcrUploadStatus)
                if (rtpcrUploadStatus == 'false') {
                    $('#btnSubmitExemptionFormEdit').show();
                    $('#imgSubmitLoaderEdit').hide();
                    bootbox.alert('Error while uploading your RT-PCR negative certificate');
                    return false;
                }
            }
            else {
                $('#btnSubmitExemptionFormEdit').show();
                $('#imgSubmitLoaderEdit').hide();
                bootbox.alert('Please upload RT-PCR negative certificate');
                return false;
            }
        }
        else {
            var rtpcrCopy = $("#" + fuID).get(0);
            if (rtpcrCopy.files.length > 0) {
                rtpcrUploadStatus = fileUploadRTPCRCopy(fuID, '', ppID);
                console.log('rtpcrUploadStatus: ' + rtpcrUploadStatus)
                if (rtpcrUploadStatus == 'false') {
                    $('#btnSubmitExemptionFormEdit').show();
                    $('#imgSubmitLoaderEdit').hide();
                    bootbox.alert('Error while uploading your RT-PCR negative certificate');
                    return false;
                }
            }
        }
    }

    //VACCINATION CERTIFICATE UPLOAD
    for (var i = 0; i < passengers_count; i++) {
        var fuID = 'fuVaccinationCopy';
        var ppID = 'txtPassportNumber';
        var VaccinationCopyUploadStatus = '';
        fuID += ((i != 0) ? (i + 1) : '');
        ppID += ((i != 0) ? (i + 1) : '');
        VaccinationCopyUploadStatus = '';
        var VaccinationCopy = $("#" + fuID).get(0);
        if (VaccinationCopy.files.length > 0) {
            VaccinationCopyUploadStatus = fileUploadRTPCRCopy(fuID, '', ppID);
            console.log('VaccinationCopyUploadStatus: ' + VaccinationCopyUploadStatus)
            if (VaccinationCopyUploadStatus == 'false') {
                $('#btnSubmitExemptionFormEdit').show();
                $('#imgSubmitLoaderEdit').hide();
                bootbox.alert('Error while uploading your vaccination certificate');
                return false;
            }
        }
    }

    doSaveEdit();
}

function doValidateEditSecondary(paxIndex) {
    var returnValue = '';
    var flight_number = $('#txtFlightNumber' + paxIndex).val();
    var seat_number = $('#txtSeatNumber' + paxIndex).val();
    var date_of_arrival = $('#txtDateOfArrival' + paxIndex).val();
    var date_of_arrival_Edit = $('#txtDateOfArrivalEdit' + paxIndex).val();
    var ddlCountryOfOrigin = $('#ddlCountryOfOrigin' + paxIndex).val();
    var txtCityOfOrigin = $('#txtCityOfOrigin' + paxIndex).val();
    var ConnectingFlightStatus = '';
    $('[name="radioConnectingFlight' + paxIndex + '"]').each(function () {
        if ($(this).prop('checked')) {
            ConnectingFlightStatus = $(this).val();
        }
    });
    var txtConnectingFlight = $('#txtConnectingFlight' + paxIndex).val();

    if (flight_number == '') {
        $('#txtFlightNumber' + paxIndex).focus();
        bootbox.alert('Please enter flight no. / tail number');
        returnValue = 'false';
        return false;
    }
    var flightNoRegExpression = /^[a-zA-Z0-9]{4,6}$/;
    if (!flightNoRegExpression.test(flight_number)) {
        $('#txtFlightNumber' + paxIndex).focus();
        bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
        returnValue = 'false';
        return false;
    }
    if (seat_number == '') {
        $('#txtSeatNumber' + paxIndex).focus();
        bootbox.alert('Please enter seat number');
        returnValue = 'false';
        return false;
    }
    if (date_of_arrival == '') {
        $('#txtDateOfArrival' + paxIndex).focus();
        bootbox.alert('Please select date of arrival');
        returnValue = 'false';
        return false;
    }
    if (ddlCountryOfOrigin == '0') {
        $('#ddlCountryOfOrigin' + paxIndex).focus();
        bootbox.alert('Please select country of departure');
        returnValue = 'false';
        return false;
    }
    if (ConnectingFlightStatus == '') {
        $('#ddlCountryOfOrigin' + paxIndex).focus();
        bootbox.alert('Please select "are you taking a connecting Domestic flight"');
        returnValue = 'false';
        return false;
    }
    if (ConnectingFlightStatus == 'Yes') {
        if (txtConnectingFlight == '') {
            $('#txtConnectingFlight' + paxIndex).focus();
            bootbox.alert('Please enter domestic connecting flight number');
            returnValue = 'false';
            return false;
        }
        if (!flightNoRegExpression.test(txtConnectingFlight)) {
            $('#txtConnectingFlight' + paxIndex).focus();
            bootbox.alert('Flight number / tail number should be minimum 4 to maximum 6 alphanumeric value, space and special characters not allowed');
            returnValue = 'false';
            return false;
        }
    }
    if (date_of_arrival_Edit != date_of_arrival) {
        var rtpcrCopy = $("#fuRTPCRCopy" + paxIndex).get(0);
        if (rtpcrCopy.files.length == 0) {
            $("#fuRTPCRCopy" + paxIndex).focus();
            bootbox.alert('Please upload RT-PCR negative certificate');
            returnValue = 'false';
            return false;
        }
    }
    if (txtCityOfOrigin == '') {
        $('#txtCityOfOrigin' + paxIndex).focus();
        bootbox.alert('Please enter city of origin');
        returnValue = 'false';
        return false;
    }
    else {
        returnValue = 'true';
        return true;
    }
    return returnValue;
}

function doSaveEdit() {
    var registration_no = $('#hfregistration_no').val();
    var flight_number = $('#txtFlightNumber').val();
    var seat_number = $('#txtSeatNumber').val();
    var pnr_number = $('#txtPNR').val();
    var passport_number = $('#txtPassportNumber').val();
    var date_of_arrival = $('#txtDateOfArrival').val();
    var arrDOA = date_of_arrival.split('/');
    var dtDOA = arrDOA[2] + '-' + arrDOA[1] + '-' + arrDOA[0];
    var ddlCountryOfOrigin = $('#ddlCountryOfOrigin').val();
    var hffuRTPCRCopy = $('#hffuRTPCRCopy').val();
    var hffuVaccinationCopy = $('#hffuVaccinationCopy').val();
    var txtCityOfOrigin = $('#txtCityOfOrigin').val();
    var emailid = $('#txtEmail').val();
    var ConnectingFlightStatus = '';
    $('[name="radioConnectingFlight"]').each(function () {
        if ($(this).prop('checked')) {
            ConnectingFlightStatus = $(this).val();
        }
    });
    var txtConnectingFlight = $('#txtConnectingFlight').val();
    var passengers_count = parseInt($('#txtPassengersCount').val());

    var dataJSONCoPassengers = "";
    if (parseInt(passengers_count) > 1) {
        for (var i = 0; i < (parseInt(passengers_count) - 1); i++) {
            var paxIndex = i + 2;
            var flight_numberSec = $('#txtFlightNumber' + paxIndex).val();
            var seat_numberSec = $('#txtSeatNumber' + paxIndex).val();
            var pnr_numberSec = $('#txtPNR' + paxIndex).val();
            var passport_numberSec = $('#txtPassportNumber' + paxIndex).val();
            var date_of_arrivalSec = $('#txtDateOfArrival' + paxIndex).val();
            var arrDOASec = date_of_arrivalSec.split('/');
            var dtDOASec = arrDOASec[2] + '-' + arrDOASec[1] + '-' + arrDOASec[0];
            var ddlCountryOfOriginSec = $('#ddlCountryOfOrigin' + paxIndex).val();
            var hffuRTPCRCopySec = $('#hffuRTPCRCopy' + paxIndex).val();
            var hffuVaccinationCopySec = $('#hffuVaccinationCopy' + paxIndex).val();
            var txtCityOfOriginSec = $('#txtCityOfOrigin' + paxIndex).val();
            var emailidSec = $('#txtEmail' + paxIndex).val();

            var ConnectingFlightStatusSec = '';
            $('[name="radioConnectingFlight' + paxIndex + '"]').each(function () {
                if ($(this).prop('checked')) {
                    ConnectingFlightStatusSec = $(this).val();
                }
            });
            var txtConnectingFlightSec = $('#txtConnectingFlight' + paxIndex).val();

            dataJSONCoPassengers += '{"registration_no":"' + registration_no + '","flightnumber":"' + flight_numberSec + '","seatnumber":"' + seat_numberSec + '","pnrnumber":"' + pnr_numberSec + '","passport_number":"' + passport_numberSec + '","date_of_arrival":"' + dtDOASec + '","countryoforigin":"' + ddlCountryOfOriginSec + '","cityoforigin":"' + txtCityOfOriginSec + '","emailid":"' + emailidSec + '","passengers_count":"' + passengers_count + '","rtpcr_copy":"' + hffuRTPCRCopySec + '","vaccination_certificate":"' + hffuVaccinationCopySec + '","connecting_flight_status":"' + ConnectingFlightStatusSec + '","connecting_flight_number":"' + txtConnectingFlightSec + '"},';
        }
        dataJSONCoPassengers = dataJSONCoPassengers.substring(0, (dataJSONCoPassengers.length - 1));
        dataJSONCoPassengers = "[" + dataJSONCoPassengers + "]";
    }
    else {
        dataJSONCoPassengers = "[]";
    }
    var dataJSON = {
        "registration_no": registration_no,
        "flightnumber": flight_number,
        "seatnumber": seat_number,
        "pnrnumber": pnr_number,
        "passport_number": passport_number,
        "date_of_arrival": dtDOA,
        "countryoforigin": ddlCountryOfOrigin,
        "cityoforigin": txtCityOfOrigin,
        "passengers_count": passengers_count,
        "rtpcr_copy": hffuRTPCRCopy,
        "vaccination_certificate": hffuVaccinationCopy,
        "connecting_flight_status": ConnectingFlightStatus,
        "connecting_flight_number": txtConnectingFlight,
        "emailid": emailid,
        "arrsecondarypassengers": JSON.parse(dataJSONCoPassengers)
    };
    $.ajax({
        type: "POST",
        async: true,
        url: "/Umbraco/Surface/SelfReporting/EditRegistration",
        data: JSON.stringify(dataJSON),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (objRes) {
            console.log('success');
            console.log(objRes);
            //var arrObjRes = objRes.split('||');
            //console.log(arrObjRes[0]);
            if (objRes.status == true && objRes.message == 'success') {
                window.location.href = '/airsuvidha/apho-thankyou?q=' + objRes.registration_no + '&edit=true';
            }
            else {
                bootbox.alert(objRes.message);
            }
        },
        error: function (err) {
            console.log('error');
            console.log(err);
            //if (err.status == 200) {
            //    //console.log(err.responseText);
            //    var arrObjRes = err.responseText.split('||');
            //    if (arrObjRes[0] == 'success') {
            //        window.location.href = '/airsuvidha/apho-thankyou?q=' + arrObjRes[1];
            //    }
            //    else {
            //        //bootbox.alert('Error occured, Please try again.');
            //        bootbox.alert(err.responseText);
            //        $('#btnSubmitExemptionForm').show();
            //        $('#imgSubmitLoader').hide();
            //    }
            //}
        }
    });
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function doChangeDOVPax1() {
    var dayDif = 0;
    var txtVaccinationDate = $('#txtVaccinationDate').val();
    var date_of_arrival = $('#txtDateOfArrival').val();
    if (txtVaccinationDate != '' && date_of_arrival != '') {
        var arrtxtVaccinationDate = txtVaccinationDate.split('/');
        var dttxtVaccinationDate = new Date(arrtxtVaccinationDate[2], parseInt(arrtxtVaccinationDate[1] - 1), arrtxtVaccinationDate[0], 0, 0);
        //console.log('dttxtVaccinationDate: ' + dttxtVaccinationDate);

        var arrdate_of_arrival = date_of_arrival.split('/');
        var dtdate_of_arrival = new Date(arrdate_of_arrival[2], parseInt(arrdate_of_arrival[1] - 1), arrdate_of_arrival[0], 0, 0);
        //console.log('dtdate_of_arrival: ' + dtdate_of_arrival);

        dayDif = datediff(dttxtVaccinationDate, dtdate_of_arrival) + 1;
        //console.log('dayDif: ' + dayDif);
    }
    return dayDif;
}
function doChangeDOVPax2() {
    var dayDif = 0;
    var txtVaccinationDate = $('#txtVaccinationDate2').val();
    var date_of_arrival = $('#txtDateOfArrival2').val();
    if (txtVaccinationDate != '' && date_of_arrival != '') {
        var arrtxtVaccinationDate = txtVaccinationDate.split('/');
        var dttxtVaccinationDate = new Date(arrtxtVaccinationDate[2], parseInt(arrtxtVaccinationDate[1] - 1), arrtxtVaccinationDate[0], 0, 0);
        //console.log('dttxtVaccinationDate: ' + dttxtVaccinationDate);

        var arrdate_of_arrival = date_of_arrival.split('/');
        var dtdate_of_arrival = new Date(arrdate_of_arrival[2], parseInt(arrdate_of_arrival[1] - 1), arrdate_of_arrival[0], 0, 0);
        //console.log('dtdate_of_arrival: ' + dtdate_of_arrival);

        dayDif = datediff(dttxtVaccinationDate, dtdate_of_arrival) + 1;
        //console.log('dayDif: ' + dayDif);
    }
    return dayDif;
}
function doChangeDOVPax3() {
    var dayDif = 0;
    var txtVaccinationDate = $('#txtVaccinationDate3').val();
    var date_of_arrival = $('#txtDateOfArrival3').val();
    if (txtVaccinationDate != '' && date_of_arrival != '') {
        var arrtxtVaccinationDate = txtVaccinationDate.split('/');
        var dttxtVaccinationDate = new Date(arrtxtVaccinationDate[2], parseInt(arrtxtVaccinationDate[1] - 1), arrtxtVaccinationDate[0], 0, 0);
        //console.log('dttxtVaccinationDate: ' + dttxtVaccinationDate);

        var arrdate_of_arrival = date_of_arrival.split('/');
        var dtdate_of_arrival = new Date(arrdate_of_arrival[2], parseInt(arrdate_of_arrival[1] - 1), arrdate_of_arrival[0], 0, 0);
        //console.log('dtdate_of_arrival: ' + dtdate_of_arrival);

        dayDif = datediff(dttxtVaccinationDate, dtdate_of_arrival) + 1;
        //console.log('dayDif: ' + dayDif);
    }
    return dayDif;
}
function doChangeDOVPax4() {
    var dayDif = 0;
    var txtVaccinationDate = $('#txtVaccinationDate4').val();
    var date_of_arrival = $('#txtDateOfArrival4').val();
    if (txtVaccinationDate != '' && date_of_arrival != '') {
        var arrtxtVaccinationDate = txtVaccinationDate.split('/');
        var dttxtVaccinationDate = new Date(arrtxtVaccinationDate[2], parseInt(arrtxtVaccinationDate[1] - 1), arrtxtVaccinationDate[0], 0, 0);
        //console.log('dttxtVaccinationDate: ' + dttxtVaccinationDate);

        var arrdate_of_arrival = date_of_arrival.split('/');
        var dtdate_of_arrival = new Date(arrdate_of_arrival[2], parseInt(arrdate_of_arrival[1] - 1), arrdate_of_arrival[0], 0, 0);
        //console.log('dtdate_of_arrival: ' + dtdate_of_arrival);

        dayDif = datediff(dttxtVaccinationDate, dtdate_of_arrival) + 1;
        //console.log('dayDif: ' + dayDif);
    }
    return dayDif;
}
function doChangeDOVPax5() {
    var dayDif = 0;
    var txtVaccinationDate = $('#txtVaccinationDate5').val();
    var date_of_arrival = $('#txtDateOfArrival5').val();
    if (txtVaccinationDate != '' && date_of_arrival != '') {
        var arrtxtVaccinationDate = txtVaccinationDate.split('/');
        var dttxtVaccinationDate = new Date(arrtxtVaccinationDate[2], parseInt(arrtxtVaccinationDate[1] - 1), arrtxtVaccinationDate[0], 0, 0);
        //console.log('dttxtVaccinationDate: ' + dttxtVaccinationDate);

        var arrdate_of_arrival = date_of_arrival.split('/');
        var dtdate_of_arrival = new Date(arrdate_of_arrival[2], parseInt(arrdate_of_arrival[1] - 1), arrdate_of_arrival[0], 0, 0);
        //console.log('dtdate_of_arrival: ' + dtdate_of_arrival);

        dayDif = datediff(dttxtVaccinationDate, dtdate_of_arrival) + 1;
        //console.log('dayDif: ' + dayDif);
    }
    return dayDif;
}


function getAge(dateString, dtAppointmentDate) {
    var today = new Date(dtAppointmentDate);
    var birthDate = new Date(dateString);

    //console.log('birthDate: ' + birthDate);
    //console.log('today: ' + today);

    var age = today.getFullYear() - birthDate.getFullYear();

    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    //console.log('age: ' + age);
    return age;
}

function doCheckPincode(pincodeControl, stateControl) {
    var txtPincode = $('#' + pincodeControl).val();
    var txtState = $('#' + stateControl + ' option:selected').text();
    var returnStatus = '';
    if (txtState != '' && txtPincode.length == 6) {
        $.ajax({
            url: '/Umbraco/Surface/SelfReporting/pincodeValidation',
            type: "GET",
            async: false,
            data: { "pincode": txtPincode, "state": txtState },
            success: function (objResult) {
                //console.log(objResult);
                if (objResult != "success") {
                    bootbox.alert(objResult);
                    $('#' + pincodeControl).val('');
                    returnStatus = 'false';
                } else {
                    returnStatus = 'true';
                }
            },
            error: function (err) {
                returnStatus = 'false';
            }
        });
    }
    return returnStatus;
}

$(".pincodeChange").on('keyup paste', function () {
    //console.log($(this).attr('id'));
    var pincodeID = $(this).attr('id');
    var stateID = '';
    var pincodeIDHidden = '';
    if (pincodeID == 'txtPincode') {
        stateID = 'ddlState';
        pincodeIDHidden = 'hfPincode';
    }
    else if (pincodeID == 'txtPincode2') {
        stateID = 'ddlState2';
        pincodeIDHidden = 'hfPincode2';
    }
    else if (pincodeID == 'txtPincode3') {
        stateID = 'ddlState3';
        pincodeIDHidden = 'hfPincode3';
    }
    else if (pincodeID == 'txtPincode4') {
        stateID = 'ddlState4';
        pincodeIDHidden = 'hfPincode4';
    }
    else if (pincodeID == 'txtPincode5') {
        stateID = 'ddlState5';
        pincodeIDHidden = 'hfPincode5';
    }
    var pincodeStatus = doCheckPincode(pincodeID, stateID);
    $('#' + pincodeIDHidden).val(pincodeStatus);
    //console.log("pincodeStatus: " + pincodeStatus);
});