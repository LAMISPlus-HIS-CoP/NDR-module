package org.lamisplus.modules.ndr.config.controller;


import lombok.RequiredArgsConstructor;
import org.lamisplus.modules.ndr.service.XMLTestService;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("api/ndr")
@RequiredArgsConstructor
public class NDRController {
    private final XMLTestService xmlTestService;

    private final SimpMessageSendingOperations messagingTemplate;

    //    @GetMapping("/message-header/{personId}")
//    public void generateMessageHeaderType(@PathVariable("personId") Long personId){
//        xmlTestService.shouldPrintMessageHeaderTypeXml (personId);
//    }
//
//    @GetMapping("/patient-demographic/{personId}")
//    public void generatePrintPatientDemographicsTypeXml(@PathVariable("personId") Long personId) {
//        xmlTestService.shouldPrintPatientDemographicsTypeXml (personId);
//    }
//
//    @GetMapping("/patient-address/{personId}")
//    public void generatePatientAddressTypeXml(@PathVariable("personId") Long personId){
//        xmlTestService.shouldPrintPatientAddressTypeXml (personId);
//    }
//
//    @GetMapping("/patient-common-question/{personId}")
//    public void generatePatientCommonQuestionXml(@PathVariable("personId") Long personId){
//        xmlTestService.shouldPrintPatientCommonQuestionsTypeXml (personId);
//    }
//@GetMapping("/patient-specific-question/{personId}")
//    public void generatePatientSpecificQuestionXml(@PathVariable("personId") Long personId){
//        xmlTestService.shouldPrintPatientConditionSpecificQuestionsTypeXml (personId);
//    }
//    @GetMapping("/patient-clinical_encouters/{personId}")
//    public void generatePatientClinicalEncounterXml(@PathVariable("personId") Long personId){
//        xmlTestService.shouldPrintPatientConditionEncountersTypeXml (personId);
//    }
    @GetMapping("/generate/{personId}")
    public void generatePatientXml(@PathVariable("personId") Long personId, @RequestParam("facility") Long facility) {
        xmlTestService.shouldPrintPatientContainerXml (personId, facility);
    }

    @GetMapping("/generate")
    @Async
    public void generateFacilityPatientXml(@RequestParam List<Long> facilityIds) {
        messagingTemplate.convertAndSend("/topic/ndr-status", "start");
        facilityIds.forEach (xmlTestService::generateNDRXMLByFacility);
        messagingTemplate.convertAndSend("/topic/ndr-status", "end");
    }


    @GetMapping("/download/{file}")
    public void downloadFile(@PathVariable String file, HttpServletResponse response) throws IOException {
        ByteArrayOutputStream baos = xmlTestService.downloadFile (file);
        response.setHeader ("Content-Type", "application/octet-stream");
        response.setHeader ("Content-Disposition", "attachment;filename=" + file + ".zip");
        response.setHeader ("Content-Length", Integer.valueOf (baos.size ()).toString ());
        OutputStream outputStream = response.getOutputStream ();
        outputStream.write (baos.toByteArray ());
        outputStream.close ();
        response.flushBuffer ();
    }

    @GetMapping("/files")
    public Collection<String> listFiles() {
        return xmlTestService.listFiles ();
    }

}
