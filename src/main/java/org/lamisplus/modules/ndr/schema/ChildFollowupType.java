
package org.lamisplus.modules.ndr.schema;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for ChildFollowupType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ChildFollowupType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="InfantARVType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{}CodeType">
 *               &lt;enumeration value="1"/>
 *               &lt;enumeration value="2"/>
 *               &lt;enumeration value="3"/>
 *               &lt;enumeration value="4"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="TimingOfARVProphylaxis" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{}CodeType">
 *               &lt;enumeration value="1"/>
 *               &lt;enumeration value="2"/>
 *               &lt;enumeration value="3"/>
 *               &lt;enumeration value="4"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="AgeAtCTXInitiation" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="InfantOutcomeAt18Months" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{}CodeType">
 *               &lt;enumeration value="1"/>
 *               &lt;enumeration value="2"/>
 *               &lt;enumeration value="3"/>
 *               &lt;enumeration value="4"/>
 *               &lt;enumeration value="5"/>
 *               &lt;enumeration value="6"/>
 *               &lt;enumeration value="7"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="DateLinkedToARTClinic" type="{http://www.w3.org/2001/XMLSchema}date" minOccurs="0"/>
 *         &lt;element name="ARTEnrollmentNumber" type="{}StringType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ChildFollowupType", propOrder = {
    "infantARVType",
    "timingOfARVProphylaxis",
    "ageAtCTXInitiation",
    "infantOutcomeAt18Months",
    "dateLinkedToARTClinic",
    "artEnrollmentNumber"
})
public class ChildFollowupType {

    @XmlElement(name = "InfantARVType")
    protected String infantARVType;
    @XmlElement(name = "TimingOfARVProphylaxis")
    protected String timingOfARVProphylaxis;
    @XmlElement(name = "AgeAtCTXInitiation")
    protected Integer ageAtCTXInitiation;
    @XmlElement(name = "InfantOutcomeAt18Months")
    protected String infantOutcomeAt18Months;
    @XmlElement(name = "DateLinkedToARTClinic")
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar dateLinkedToARTClinic;
    @XmlElement(name = "ARTEnrollmentNumber")
    protected String artEnrollmentNumber;

    /**
     * Gets the value of the infantARVType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInfantARVType() {
        return infantARVType;
    }

    /**
     * Sets the value of the infantARVType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInfantARVType(String value) {
        this.infantARVType = value;
    }

    /**
     * Gets the value of the timingOfARVProphylaxis property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTimingOfARVProphylaxis() {
        return timingOfARVProphylaxis;
    }

    /**
     * Sets the value of the timingOfARVProphylaxis property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTimingOfARVProphylaxis(String value) {
        this.timingOfARVProphylaxis = value;
    }

    /**
     * Gets the value of the ageAtCTXInitiation property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getAgeAtCTXInitiation() {
        return ageAtCTXInitiation;
    }

    /**
     * Sets the value of the ageAtCTXInitiation property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setAgeAtCTXInitiation(Integer value) {
        this.ageAtCTXInitiation = value;
    }

    /**
     * Gets the value of the infantOutcomeAt18Months property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInfantOutcomeAt18Months() {
        return infantOutcomeAt18Months;
    }

    /**
     * Sets the value of the infantOutcomeAt18Months property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInfantOutcomeAt18Months(String value) {
        this.infantOutcomeAt18Months = value;
    }

    /**
     * Gets the value of the dateLinkedToARTClinic property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateLinkedToARTClinic() {
        return dateLinkedToARTClinic;
    }

    /**
     * Sets the value of the dateLinkedToARTClinic property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateLinkedToARTClinic(XMLGregorianCalendar value) {
        this.dateLinkedToARTClinic = value;
    }

    /**
     * Gets the value of the artEnrollmentNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getARTEnrollmentNumber() {
        return artEnrollmentNumber;
    }

    /**
     * Sets the value of the artEnrollmentNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setARTEnrollmentNumber(String value) {
        this.artEnrollmentNumber = value;
    }

}
