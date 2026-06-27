from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

content = """
A US-Iran agreement to extend the ceasefire between the two countries has been signed and is now in effect, a White House official has confirmed to the BBC.

President Donald Trump formally signed the deal - which is set to reopen the pivotal Strait of Hormuz - while attending the G7 summit in Evian-les-Bains in France.

The 14-point agreement, which is known as a Memorandum of Understanding, says that Iran will never have a nuclear weapon, and also commits a $300bn fund for the "reconstruction and economic development" of the country - although the US is not required to contribute. It comes four months after the conflict between the countries - and Israel - broke out.

The agreement has been described by the Trump administration as "performance-based", with Iran benefitting only if it complies with its commitments.

While the text of the deal leaves many questions unanswered - and many key issues unsolved - here's what we know about some of the key points.

Point 1: An end to conflict 'on all fronts'
The first paragraph of the agreement notes that the US, Iran and allies will declare an "immediate and permanent" termination of military operations on "all fronts" - including Lebanon.

From the US perspective, Trump has been growing increasingly concerned that Israeli military operations against Hezbollah could upend the agreement with Iran.

Tehran, for its part, has repeatedly said it expected Lebanon to be covered by the truce.

Any continuation of Israeli military operations in Lebanon would constitute a "violation of the understanding" and "necessary measures will be taken", a spokesperson for the Iranian Ministry of Foreign Affairs said on Wednesday.

The agreement notes that "from now on" neither side will initiate military operations or threaten each other, and ensure "the territorial integrity and sovereignty" of Lebanon.

The final agreement will lead to the permanent "termination" of the conflict, the document says.

It is unclear how Israel will react to this point.

Point 2: Respect for 'internal affairs'
The text of the document - read verbatim to reporters in a call with US officials - notes that the US and Iran will "respect each other's sovereignty and territorial integrity" and refrain from interfering in each side's internal affairs.

This will likely be received negatively by Iranian dissident groups.

Earlier this year, Trump promised Iranian protesters that "help is on the way" during anti-government demonstrations that swept across Iranian cities.

Point 3: An extendable 60-day timeline
According to the third point in the document, the US and Iran will commit to negotiating and achieving a final deal in a "maximum" of 60 days, although that timeline could be extended with mutual consent.

That 60-day countdown has now begun after the leaders of of the two countries officially signed the MoU.

Trump signed the Iran document at a post-G7 dinner at the Palace of Versailles in France on Wednesday night, the White House told the BBC.

It has also been signed by Iranian President Masoud Pezeshkian, according to the White House.

Earlier, both Trump and Iranian officials indicated there would be a formal signing ceremony in Geneva later this week. It is unclear whether that will still go ahead now.

Point 4: US to end blockade
Once the MoU is signed, the US will begin removing its naval blockade and "any disturbances or impediments" that have been placed on Iranian ports, the fourth point says.

The blockade will end fully within 30 days, according to the agreement and the Iranian Ministry of Foreign Affairs. During this time, the number of vessels the US allows through Iranian ports will be in proportion to the traffic being restored by Iran in the Strait of Hormuz.

Within 30 days of a final deal being signed, the US has committed to removing American forces from the "proximity of Iran".

In practice, this means that the US military will return to the posture and assets it had in place before hostilities began on 28 February.

Point 5: Strait of Hormuz
Part of the agreement notes that upon the signing of the MoU, Iran will "make arrangements using its best efforts" to allow safe passage of commercial vessels through the Strait of Hormuz - with no charge.

This has been a significant objective of the US since the war began and the Strait of Hormuz was shut, sending global oil prices spiking.

The document notes that traffic will start flowing "immediately", taking into account the need to remove technical and military "obstacles" and conduct de-mining operations.

The officials in a briefing earlier repeatedly sought to make clear that vessels would not be charged for transit through the Strait of Hormuz.

In the longer-term, the document notes that Iran will work with Oman and other Gulf states to set up a "broader" agreement on how to manage the Strait of Hormuz.

The US believes that Iran will assert its rights "aggressively", but that the Gulf states would "never" accept a future in which there is a tolling system in place, the official said.

Point 6: Money for Iran reconstruction
The sixth point of the MoU says the US and regional partners will develop a "definitive, mutually agreed plan" worth at least $300bn (£224bn) for reconstruction and economic development in Iran.

The final mechanism will be agreed within 60 days of the final deal, and all licences, waivers and permissions will be granted by the US.

However, this does not mean the US will be financially involved.

One official noted that the US is not required to pay "a cent of money" to Iran, or contribute to the fund.

As a hypothetical example, the official said that if Iran "behaves", Emirati authorities could build a power plant in Iran, with US blessing.

Trump and other officials have gone to great lengths to make clear to the US public that it will not be paying Iran directly, which the administration says stands in stark contrast to the 2015 nuclear agreement between Iran and the Obama administration.

Point 7: Sanctions to end
The US will terminate all economic sanctions against Iran, including those included in UN Security Council resolutions and those implemented unilaterally by the US.

The timeline, however, is unclear.

The document notes that the schedule will be agreed upon as part of the final deal, but that both sides acknowledge their intentions to "immediately" address the issue in subsequent negotiations.

Iran has been hard-hit by sanctions, and a US campaign - Operation Economic Fury - has sought to cut Tehran off from the global financial system.

Point 8: No nuclear weapons
Iran has agreed to not procure or develop a nuclear weapon, and both sides have agreed to deal with the enriched uranium Tehran already has.

The method to manage the material is unclear. The document notes that the mechanism "will be mutually agreed upon" in subsequent talks, but that, at a minimum, it will be "downblended" in place under the supervision of the International Atomic Energy Agency, or IAEA.

A senior US official described this as a "minimum standard" and a "major win" for the US.

Trump has said that preventing Iran from having a nuclear weapon was "99%" of what he wanted by launching Operation Epic Fury earlier this year.

Because the US has described the deal as performance-based, the sanctions relief specified in point 7 is tied to Iran complying with point 8.

Points 9 & 10: A 'status quo'
The following two parts of the agreement specify that the US and Iran agree to a "status quo" of its nuclear programme in the meantime, until the enriched uranium can be dealt with.

In practice, this means that the US will not impose new sanctions. In the meantime, it will issue waivers for the export of oil, petroleum products and other associated services, such as banking transactions and transportation.

Point 11: Frozen funds
This point has been a significant impediment to negotiations.

Iran had long insisted that its frozen assets be released, offering the country another economic lifeline.

The eleventh point of the document notes that the US "undertakes to make fully available frozen or restricted funds" once the MoU is signed and that procedures will be agreed upon during negotiations.

A US official told reporters on Wednesday that some assets will be released while post-MoU talks continue to reward Iran when it complies with aspects of the agreement, such as beginning to deal with its highly enriched uranium.

Points 12-14: Monitoring and final negotiations
The final few points of the document lay out the logistics of how the deal will unfold.

They say the US and Iran will establish a "mechanism" to monitor the implentation of the MoU and compliance with a future deal, though it is unclear what this will look like in practice.

Then, once the MoU is signed and implementation begins, the US and Iran will start negotations for a final deal.

And finally, the MoU spells out that a final deal will be endorsed by a binding UN Security Council resolution.
”"""
def test_detect():

    response = client.post(
        "/api/detect",
        json={
            "title": "What's in the US-Iran agreement?",
            "content": content,
            "reasoning": False
        }
    )

    assert response.status_code == 200

    print(f"this is the result: ", response.json())

    # assert "prediction" in data

# def test_detect_invalid_input():
#     response = client.post("/api/detect", json={"title": "this is a test title", "content": 123})
#     assert response.status_code == 422
#     assert response.json() == {"detail": [{"loc": ["body", "content"], "msg": "value is not a valid string", "type": "type_error.str"}]}

# def test_detect_empty_input():
#     response = client.post("/api/detect", json={"title": "", "content": ""})
#     assert response.status_code == 422
#     assert response.json() == {"detail": [{"loc": ["body", "title"], "msg": "string cannot be empty", "type": "value_error.missing"}]}